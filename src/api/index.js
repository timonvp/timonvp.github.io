import axiosRoot from 'axios';
import config from '../config.json';

export const apiPrefix = JSON.parse(process.env.REACT_APP_API_PREFIX || '"http://localhost:9000/api"');
console.log(apiPrefix);

export const axios = axiosRoot.create({
	baseURL: apiPrefix+'/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem(config.token_key)}`,
    }
});

export const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers['Authorization'] = `Bearer ${token}`;
	} else {
	delete axios.defaults.headers['Authorization'];
	}
}