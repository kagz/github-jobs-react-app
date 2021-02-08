import axios from 'axios';

const client = axios.create({
	// baseURL: '/api',
	headers: {
		Accepts: 'application/json',
		'Content-Type': 'application/json',
	},
});

client.interceptors.response.use(res => {
	if (res.status >= 200 && res.status < 300) return res.data;
	throw new Error(res);
});

export default client;
