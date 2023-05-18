import type Video from '../types/Video.d';
import type SearchVideo from '../types/SearchVideo.d';
import type VideoDetails from '../types/VideoDetails.d';
import type ChannelDetails from '../types/ChannelDetails.d';

export const getVideoAndChannelIds = (videos: SearchVideo[]) => {
	const videoIds: string[] = [];
	const channelIds: string[] = [];
	videos.forEach(video => {
		videoIds.push(video.id.videoId);
		channelIds.push(video.snippet.channelId);
	});
	return { videoIds, channelIds };
};

export const parseVideos = (
	searchVideos: SearchVideo[],
	videosDetails: VideoDetails[],
	channelsDetails: ChannelDetails[]
) => {
	const videoIds: string[] = [];
	searchVideos.forEach((v: SearchVideo) => videoIds.push(v.id.videoId));

	const videos: Video[] = [];
	videoIds.forEach(id => {
		const searchVideo: SearchVideo = searchVideos.filter(
			v => v.id.videoId === id
		)[0];
		const videoDetails: VideoDetails = videosDetails.filter(
			v => v.id === id
		)[0];
		const channelDetails: ChannelDetails = channelsDetails.filter(
			c => c.id === searchVideo.snippet.channelId
		)[0];

		const video: Video = {
			id: id,
			title: searchVideo.snippet.title,
			description: searchVideo.snippet.description,
			image: searchVideo.snippet.thumbnails.medium.url,
			publishedAt: searchVideo.snippet.publishedAt,
			duration: parseVideoDuration(videoDetails.contentDetails.duration),
			views: parseViews(videoDetails.statistics.viewCount),
			age: timeSince(searchVideo.snippet.publishedAt),
			channelId: channelDetails.id,
			channelTitle: channelDetails.snippet.title,
			channelImage: channelDetails.snippet.thumbnails.default.url,
		};
		videos.push(video);
	});
	return videos;
};

const parseVideoDuration = (duration: string) => {
	const durationParts: string[] = duration
		.replace('PT', '')
		.replace('H', ':')
		.replace('M', ':')
		.replace('S', '')
		.split(':');

	if (durationParts.length === 3) {
		return `${durationParts[0]}:${
			parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
		}:${
			parseInt(durationParts[2]) < 9 ? `0${durationParts[2]}` : durationParts[2]
		}`;
	} else if (durationParts.length === 2) {
		return `${durationParts[0]}:${
			parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
		}`;
	} else if (durationParts.length === 1) {
		return `0${
			parseInt(durationParts[0]) < 9 ? `0${durationParts[0]}` : durationParts[0]
		}`;
	}
	return '0';
};

const parseViews = (views: string, isSub = false) => {
	const number = Math.abs(Number(views));
	return number >= 1.0e9
		? (number / 1.0e9).toFixed(0) + 'B'
		: number >= 1.0e6
		? (number / 1.0e6).toFixed(0) + 'M'
		: number >= 1.0e3
		? (number / 1.0e3).toFixed(isSub ? 2 : 0) + 'K'
		: number.toString();
};

const timeSince = (dateString: string) => {
	const date = new Date(dateString);
	const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

	let interval = seconds / 31536000;
	if (interval > 1) return Math.floor(interval) + ' years';

	interval = seconds / 2592000;
	if (interval > 1) return Math.floor(interval) + ' months';

	interval = seconds / 86400;
	if (interval > 1) return Math.floor(interval) + ' days';

	interval = seconds / 3600;
	if (interval > 1) return Math.floor(interval) + ' hours';

	interval = seconds / 60;
	if (interval > 1) return Math.floor(interval) + ' minutes';

	return Math.floor(interval) + ' seconds';
};
