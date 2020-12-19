import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import './Webmap.scss';

const Webmap: FC = () => {
  const validatorEndpoint = 'http://157.230.75.212/validators?limit=30&offset=0';
  const ipInfoEndpoint = 'http://ip-api.com/batch/';

  interface APIResponse {
    query: string;
    country: string;
    city: string;
    org: string;
    account_number: number;
    default_transaction_fee: number;
    lat: number;
    lon: number;
  }

  const [state, setState] = useState<APIResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      const validatorResponse = await axios.get(validatorEndpoint);
      const validatorIps = [];
      for (let i = 0; i < validatorResponse.data.count; i += 1) {
        const ipAddress = validatorResponse.data.results[i].ip_address;
        validatorIps.push({query: ipAddress});
      }
      const resultBatch = await axios.post(ipInfoEndpoint, validatorIps);
      const merged = validatorResponse.data.results.map((result: any, i: string | number) => ({
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
        <Marker key={node.query} position={[node.lat + Math.random() * (0.2 - 0.1) + 0.1, node.lon]}>
          <Popup maxWidth={700} position={[node.lat + Math.random() * (0.2 - 0.1) + 0.1, node.lon]}>
            <div>
              <h2>Node Info</h2>
              <br />
              IP Address: {node.query}
              <br />
              Country: {node.country}
              <br />
              City: {node.city}
              <br />
              Provider: {node.org}
              <br />
              Account Number: {node.account_number}
              <br />
              Default TX Fee: {node.default_transaction_fee}
              <br />
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default Webmap;
