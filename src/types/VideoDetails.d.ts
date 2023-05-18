interface VideoDetails {
	etag: string;
	id: string;
	kind: string;
	contentDetails: {
		caption: string;
		contentRating: unknown;
		definition: string;
		dimension: string;
		duration: string;
		licensedContent: boolean;
		projection: string;
	};
	statistics: {
		commentCount: string;
		favoriteCount: string;
		likeCount: string;
		viewCount: string;
	};
}

export default VideoDetails;
