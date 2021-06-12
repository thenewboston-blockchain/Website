import axios from 'axios';
import {standardHeaders} from 'utils/requests';

interface FeedbackData {
  email: string;
  message: string;
  name: string;
}

export async function sendFeedback(data: FeedbackData) {
  return axios.post(`${process.env.REACT_APP_BACKEND_API}/feedback`, data, standardHeaders());
}
