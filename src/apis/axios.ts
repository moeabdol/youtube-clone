import axios from 'axios';
import type { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_YOUTUBE_BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	params: {
		key: import.meta.env.VITE_YOUTUBE_API_KEY,
	},
});

export default axiosInstance;
