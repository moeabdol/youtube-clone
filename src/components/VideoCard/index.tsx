import React from 'react';
import { Container, ImageContainer } from './styles';
import type Video from '../../types/Video.d';
import { Link } from 'react-router-dom';

type VideoCardProps = {
	video: Video;
};

function VideoCard({ video }: VideoCardProps) {
	return (
		<Container>
			<ImageContainer>
				<Link to={`/watch/${video.id}`}>
					<img src={video.image} alt="Video image" />
				</Link>
			</ImageContainer>
		</Container>
	);
}

export default VideoCard;
