import axios from './axios';
import { AxiosError } from 'axios';

export const searchVideos = async (term: string, nextPageToken: string) => {
	try {
		return await axios.get(
			`/search?q="${term}"&maxResults=20&part=snippet&type=video${
				nextPageToken !== '' ? `&nextPageToken=${nextPageToken}` : ''
			}`
		);
	} catch (error) {
		if (error instanceof AxiosError) throw error.message;
		else throw error;
	}
};

export const getChannelsDetails = async (channelIds: string[]) => {
	try {
		return await axios.get(
			`/channels?part=snippet,contentDetails&id=${channelIds.join(',')}`
		);
	} catch (error) {
		if (error instanceof AxiosError) throw error.message;
		else throw error;
	}
};

export const getVideosDetails = async (videoIds: string[]) => {
	try {
		return await axios.get(
			`/videos?part=contentDetails,statistics&id=${videoIds.join(',')}`
		);
	} catch (error) {
		if (error instanceof AxiosError) throw error.message;
		else throw error;
	}
};
