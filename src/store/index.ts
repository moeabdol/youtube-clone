import { configureStore } from '@reduxjs/toolkit';
import youtubeSlice from './slices/Youtube';

const store = configureStore({
	reducer: {
		youtube: youtubeSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
