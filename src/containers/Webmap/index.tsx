import React, {FC, useEffect, useState} from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import axios from 'axios';
import {Icon} from 'leaflet';

import bankSvg from 'assets/svgs/bank1.svg';
import validatorSvg from 'assets/svgs/validator.svg';
import * as apiEndpoints from 'constants/api-endpoints';
import {useWindowDimensions} from 'hooks';

import './Webmap.scss';

const bankIcon = new Icon({
  iconSize: [20, 20],
  iconUrl: bankSvg,
});

const validatorIcon = new Icon({
  iconSize: [20, 20],
  iconUrl: validatorSvg,
});

const Webmap: FC = () => {
  const windowDimensions = useWindowDimensions();

  interface APIResponse {
    account_number: number;
    city: string;
    country: string;
    default_transaction_fee: number;
    lat: number;
    lon: number;
    org: string;
    query: string;
    root_account_file: string;
  }

  const [state, setState] = useState<APIResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      const nodeResponse = await axios.all([
        axios.get(apiEndpoints.VALIDATOR_ENDPOINT),
        axios.get(apiEndpoints.BANK_ENDPOINT),
      ]);
      const nodeResponses = nodeResponse[0].data.results.concat(nodeResponse[1].data.results);
      const validatorIps = [];
      for (let i = 0; i < nodeResponses.length; i += 1) {
        const ipAddress = nodeResponses[i].ip_address;
        validatorIps.push({query: ipAddress});
      }
      const resultBatch = await axios.post(apiEndpoints.IPAPI_ENDPOINT, validatorIps);
      const merged = nodeResponses.map((result: any, i: string | number) => ({
        ...result,
        ...resultBatch.data[i],
      }));
      setState(merged);
    }
    fetchData();
  }, []);

  const renderPopupContent = (node: APIResponse) => (
    <div className="Map__popup-content">
      <h2>Node Info</h2>
      <br />
      <h4>Node Type: {node.root_account_file ? 'Validator' : 'Bank'}</h4>
      <h4>Country: {node.country}</h4>
      <h4>City: {node.city}</h4>
      <h4>IP Address: {node.query}</h4>
      <h4>Account Number: {node.account_number}</h4>
      <h4>Default TX Fee: {node.default_transaction_fee}</h4>
      <h4>Provider: {node.org}</h4>
    </div>
  );
  return (
    <Map
      className="Map"
      center={windowDimensions.clientWidth > 450 ? [37, -30] : [45, -20]}
      zoom={windowDimensions.clientWidth > 450 ? 2.5 : 1}
      minZoom={windowDimensions.clientWidth > 450 ? 2.5 : 1}
      maxBounds={[
        [90, -180],
        [-90, 180],
      ]}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
      />
      {state.map((node) => (
        <Marker
          key={node.query}
          position={[node.lat + Math.random() * (0.2 - 0.1) + 0.1, node.lon]}
          icon={node.root_account_file ? validatorIcon : bankIcon}
        >
          {windowDimensions.clientWidth > 450 && (
            <Popup maxWidth={700} position={[node.lat + Math.random() * (0.2 - 0.1) + 0.1, node.lon]}>
              {renderPopupContent(node)}
            </Popup>
          )}

          {windowDimensions.clientWidth < 450 && (
            <Popup maxWidth={250} position={[node.lat + Math.random() * (0.2 - 0.1) + 0.1, node.lon]}>
              {renderPopupContent(node)}
            </Popup>
          )}
        </Marker>
      ))}
    </Map>
  );
};

export default Webmap;
