import axios from 'axios';

const URL = 'https://ediaristas-workshop.herokuapp.com'

export const ApiService = axios.create({
    baseURL: URL,
    headers: {
        'Content-type': 'application/json',
    }
});