import axios from 'axios';
 
export const card = axios.create({
    baseURL: 'https://6075786f0baf7c0017fa64ce.mockapi.io'
});

export const image = axios.create({
    baseURL: 'https://source.unsplash.com'
});

