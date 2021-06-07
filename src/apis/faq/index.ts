import axios from 'axios';
import {standardHeaders} from 'utils/requests';

// TODO: Update with BE
export async function sendFeedback(name: string, email: string, response: string) {
  return axios.post(
    `https://v1.nocodeapi.com/jamessspanggg/google_sheets/XKBFrUzDbyXOOFNR?tabId=Sheet1&api_key=${process.env.REACT_APP_GOOGLE_SHEET_FAQ_API_KEY}`,
    [[name, email, response]],
    standardHeaders(),
  );
}
