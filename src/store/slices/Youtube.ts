import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type Video from '../../types/Video.d';
import { getHomePageVideos as getHomePageVideosApi } from '../../apis/Youtube';
import { RootState } from '../';

type YoutubeSliceProps = {
	loading: boolean;
	error?: string;
	videos: Video[];
	currentVideo?: Video;
};

const initialState: YoutubeSliceProps = {
	loading: false,
	error: undefined,
	videos: [],
	currentVideo: undefined,
};

export const getHomePageVideos = createAsyncThunk<
	Video[],
	undefined,
	{ state: RootState; rejectValue: string }
>('youtube/getHomePageVideos', async (_: undefined, thunkApi) => {
	try {
		return await getHomePageVideosApi();
	} catch (error) {
		if (typeof error === 'string') return thunkApi.rejectWithValue(error);
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
				state.videos = action.payload;
			})
			.addCase(getHomePageVideos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default youtubeSlice;
