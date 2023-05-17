import React, { useEffect } from 'react';
import { Container } from './styles';
import useAppDispatch from '../../hooks/AppDispatch';
import useAppSelector from '../../hooks/AppSelector';
import { getHomePageVideos } from '../../store/slices/Youtube';

function Home() {
	const dispatch = useAppDispatch();
	const { videos, error } = useAppSelector(state => state.youtube);

	useEffect(() => {
		dispatch(getHomePageVideos());
	}, []);

	useEffect(() => {
		if (videos) console.log(videos);
	}, [videos]);

	useEffect(() => {
		if (error) console.log(error);
	}, [error]);

	return (
		<Container>
			<div>Helloooooo</div>
		</Container>
	);
}

export default Home;
