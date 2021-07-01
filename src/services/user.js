import axios from 'axios';
const BASE_URL = 'https://dummyapi.io/data/api'
const headers = {
    "app-id": "60d8d969bdda895e6c037df3"
};

export const fetchUser = (id) => axios.get(`${BASE_URL}/user/${id}`, { headers: headers })
    .then((res) => {
        return res.data;
    })
    .then(res => {
        return res;
    });

export const fetchUserPosts = (id, limit = 10) => axios.get(`${BASE_URL}/user/${id}/post?limit=${limit}`, { headers: headers })
    .then((res) => {
        return res.data;
    })
    .then(res => {
        const { data } = res;
        return data;
    });
