interface ChannelDetails {
	etag: string;
	id: string;
	kind: string;
	contentDetails: {
		relatedPlaylists: {
			likes: string;
			uploads: string;
		};
	};
	snippet: {
		title: string;
		description: string;
		customUrl: string;
		country: string;
		publishedAt: string;
		localized: {
			title: string;
			description: string;
		};
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

export default ChannelDetails;
