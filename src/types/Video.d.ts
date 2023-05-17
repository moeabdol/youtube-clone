interface Video {
	id: string;
	title: string;
	description: string;
	duration: string;
	publishedAt: string;
	thumbnails: {
		default: string;
		medium: string;
		high: string;
	};
	channelId: string;
	channelTitle: string;
	channelImage: string;
}

export default Video;
