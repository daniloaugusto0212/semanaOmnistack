import axios from 'axios';

const api = axios.create({
    baseURL: 'http:///192.168.2.109:3332'

});

export default api;