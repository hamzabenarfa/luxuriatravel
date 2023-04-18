import axios from 'axios';
import cors from 'cors';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
});



export default instance;
