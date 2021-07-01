import axios from 'axios';
const BASE_URL = 'https://dummyapi.io/data/api'
const headers = {
    "app-id": "60d8d969bdda895e6c037df3"
};

export const fetchPosts = (limit = 10) => axios.get(`${BASE_URL}/post?limit=${limit}`, { headers: headers })
    .then((res) => {
        return res.data;
    })
    .then(res => {
        const { data } = res;
        return data;
    });