import axios from 'axios';
import {
    baseURL
} from '../constants';


const API = axios.create({

    baseURL: 'http://localhost:3000/api'
    
})

export default API;

