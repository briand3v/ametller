import axios from 'axios';
const BASE_URL = 'http://localhost:8080/auth'
const headers = {
    "Content-type": "application/json"
};

export const signUp = (user) => axios.post(`${BASE_URL}/register`, user, headers)
    .then(res => {
        return res.data;
    })
    .then(res => {
        const { user } = res;
        return user;
    })

export const signIn = (user) => axios.post(`${BASE_URL}/login`, user, headers)
    .then(res => {
        return res.data;
    })
    .then(res => {
        const { token } = res;
        return token;
    });

