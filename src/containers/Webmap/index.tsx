import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {Icon} from 'leaflet';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import './Webmap.scss';

export const bankIcon = new Icon({
  iconSize: [20, 20],
  iconUrl: '/bank1.svg',
});

export const validatorIcon = new Icon({
  iconSize: [20, 20],
  iconUrl: '/validator.svg',
});

const Webmap: FC = () => {
  const validatorEndpoint = 'http://157.230.75.212/validators?limit=30&offset=0';
  const bankEndpoint = 'http://157.230.75.212/banks?limit=30&offset=0';
  const ipInfoEndpoint = 'http://ip-api.com/batch/';

  interface APIResponse {
    query: string;
    country: string;
    city: string;
    org: string;
    root_account_file: string;
    account_number: number;
    default_transaction_fee: number;
    lat: number;
    lon: number;
  }

  const [state, setState] = useState<APIResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      const nodeResponse = await axios.all([axios.get(validatorEndpoint), axios.get(bankEndpoint)]);
      const nodeResponses = nodeResponse[0].data.results.concat(nodeResponse[1].data.results);
      const validatorIps = [];
      for (let i = 0; i < nodeResponses.length; i += 1) {
        const ipAddress = nodeResponses[i].ip_address;
        validatorIps.push({query: ipAddress});
      }
      const resultBatch = await axios.post(ipInfoEndpoint, validatorIps);
      const merged = nodeResponses.map((result: any, i: string | number) => ({
        ...result,
        ...resultBatch.data[i],
      }));
      setState(merged);
    }
    fetchData();
  }, []);

  return (
    <Map center={[37, -30]} zoom={3}>
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'"
      />
      {state.map((node) => (
        <Marker
          key={node.query}
          position={[node.lat + Math.random() * (0.2 - 0.1) + 0.1, node.lon]}
          icon={node.root_account_file != null ? validatorIcon : bankIcon}
        >
          <Popup maxWidth={700} position={[node.lat + Math.random() * (0.2 - 0.1) + 0.1, node.lon]}>
            <div>
              <h2>Node Info</h2>
              <br />
              <h4>Node Type: {node.root_account_file != null ? 'Validator' : 'Bank'}</h4>
              <h4>Country: {node.country}</h4>
              <h4>City: {node.city}</h4>
              <h4>IP Address: {node.query}</h4>
              <h4>Account Number: {node.account_number}</h4>
              <h4>Default TX Fee: {node.default_transaction_fee}</h4>
              <h4>Provider: {node.org}</h4>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default Webmap;
