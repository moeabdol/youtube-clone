interface SearchVideo {
	etag: string;
	kind: string;
	id: {
		kind: string;
		videoId: string;
	};
	snippet: {
		title: string;
		description: string;
		publishTime: string;
		publishedAt: string;
		liveBroadcastContent: string;
		channelId: string;
		channelTitle: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
		};
	};
}

export default SearchVideo;
