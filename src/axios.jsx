import axios from 'axios'
import {baseUrl} from './constants/costants'

const instance = axios.create({
    baseURL: baseUrl,
    
  });

export default instance