import React, { useEffect } from 'react';
import { Container, VideosContainer } from './styles';
import useAppDispatch from '../../hooks/AppDispatch';
import useAppSelector from '../../hooks/AppSelector';
import { getHomePageVideos } from '../../store/slices/Youtube';
import Spinner from '../../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import VideoCard from '../../components/VideoCard';

function Home() {
	const dispatch = useAppDispatch();
	const { videos, nextPageToken, error } = useAppSelector(
		state => state.youtube
	);

	useEffect(() => {
		// dispatch(getHomePageVideos(false));
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
			{videos.length > 0 ? (
				<InfiniteScroll
					className="iscroll"
					dataLength={videos.length}
					hasMore={videos.length < 500}
					loader={<Spinner />}
					next={() => dispatch(getHomePageVideos(true))}
				>
					<VideosContainer>
						{videos.map(video => (
							<VideoCard key={video.id} video={video} />
						))}
					</VideosContainer>
				</InfiniteScroll>
			) : (
				<Spinner />
			)}
		</Container>
	);
}

export default Home;
