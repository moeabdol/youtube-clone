import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	padding: 20px;
	margin-left: 230px;

	.iscroll {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`;

export const VideosContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
`;
