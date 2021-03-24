import axios from 'axios';

import * as apiEndpoints from 'constants/api-endpoints';

export async function getAllNodes() {
  return axios.all([axios.get(apiEndpoints.VALIDATOR_ENDPOINT), axios.get(apiEndpoints.BANK_ENDPOINT)]);
}

export async function getAllValidatorIps(validatorIps: any) {
  return axios.post(apiEndpoints.IPAPI_ENDPOINT, validatorIps);
}
