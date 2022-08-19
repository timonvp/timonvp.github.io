import { apiPrefix, axios } from ".";

export const login = async (username, password) => {
	const {
		data: {data}
	} = await axios.post(`${apiPrefix}/login`, {
		username,
		password
	});
	return data;
};

export const register = async (username, password) => {
	const {
		data: {data}
	} = await axios.post(`${apiPrefix}/users`, {
		username,
		password
	});
	return data;
};