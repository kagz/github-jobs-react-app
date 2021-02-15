import axios from 'axios';

const client = axios.create({
	baseURL: '/api',
	headers: {
		Accepts: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default client;
