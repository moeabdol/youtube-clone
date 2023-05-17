import axios from './axios';
import { AxiosError } from 'axios';

export const getHomePageVideos = async () => {
	try {
		const res = await axios.get(
			'/search?q="reactjs projects"&maxResults=20&part=snippet&type=video'
		);
		return res.data.items;
	} catch (error) {
		if (error instanceof AxiosError) throw error.message;
		else throw error;
	}
};
