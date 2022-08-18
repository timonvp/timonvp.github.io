import { axios } from ".";
import config from '../config.json';

export const login = async (username, password) => {
	const {
		data: {data}
	} = await axios.post(`${config.base_url}login`, {
		username,
		password
	});
	return data;
};

export const register = async (username, password) => {
	const {
		data: {data}
	} = await axios.post(`${config.base_url}users`, {
		username,
		password
	});
	return data;
};