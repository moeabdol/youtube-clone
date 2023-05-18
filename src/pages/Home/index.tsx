import React, { useEffect } from 'react';
import { Container } from './styles';
import useAppDispatch from '../../hooks/AppDispatch';
import useAppSelector from '../../hooks/AppSelector';
import { getHomePageVideos } from '../../store/slices/Youtube';
import Spinner from '../../components/Spinner';

function Home() {
	const dispatch = useAppDispatch();
	const { videos, nextPageToken, error } = useAppSelector(
		state => state.youtube
	);

	useEffect(() => {
		// dispatch(getHomePageVideos());
	}, [dispatch]);

	useEffect(() => {
		if (videos) console.log('videos', videos);
	}, [videos]);

	useEffect(() => {
		if (nextPageToken) console.log('nextPageToken', nextPageToken);
	}, [nextPageToken]);

	useEffect(() => {
		if (error) console.log(error);
	}, [error]);

	return (
		<Container>
			<Spinner />
		</Container>
	);
}

export default Home;
