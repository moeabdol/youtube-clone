import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type Video from '../../types/Video.d';
import {
	searchVideos as searchVideosApi,
	getVideosDetails as getVideosDetailsApi,
	getChannelsDetails as getChannelsDetailsApi,
} from '../../apis/Youtube';
import { RootState } from '../';
import { getVideoAndChannelIds, parseVideos } from '../../utils/Youtube';

type YoutubeSliceProps = {
	loading: boolean;
	error?: string;
	videos: Video[];
	nextPageToken?: string;
	currentVideo?: Video;
};

const initialState: YoutubeSliceProps = {
	loading: false,
	error: undefined,
	videos: [],
	nextPageToken: undefined,
	currentVideo: undefined,
};

export const getHomePageVideos = createAsyncThunk<
	{ videos: Video[]; nextPageToken: string },
	undefined,
	{ state: RootState; rejectValue: string }
>('youtube/getHomePageVideos', async (_: undefined, thunkApi) => {
	try {
		let res = await searchVideosApi();
		const searchVideos = res.data.items;
		const nextPageToken = res.data.nextPageToken;
		const { videoIds, channelIds } = getVideoAndChannelIds(searchVideos);

		res = await getVideosDetailsApi(videoIds);
		const videosDetails = res.data.items;

		res = await getChannelsDetailsApi(channelIds);
		const channelsDetails = res.data.items;

		const videos = parseVideos(searchVideos, videosDetails, channelsDetails);
		return { videos, nextPageToken };
	} catch (error) {
		if (typeof error === 'string') return thunkApi.rejectWithValue(error);
		return thunkApi.rejectWithValue('Something went wrong!');
	}
});

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getHomePageVideos.pending, state => {
				state.loading = true;
			})
			.addCase(getHomePageVideos.fulfilled, (state, action) => {
				state.loading = false;
				state.videos = action.payload.videos;
				state.nextPageToken = action.payload.nextPageToken;
			})
			.addCase(getHomePageVideos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default youtubeSlice;
