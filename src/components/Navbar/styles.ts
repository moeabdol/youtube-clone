import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	background-color: ${Colors.offBlack};
	padding: 0 20px;
	height: 60px;
	opacity: 0.95;
	position: sticky;
	top: 0;
	z-index: 3;
`;

export const BrandContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	font-size: 25px;

	.hamburger {
		margin-right: 25px;
	}

	.brand {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		text-decoration: none;
		font-weight: 700;

		svg {
			fill: ${Colors.youtubeRed};
		}

		span {
			margin: 0 5px;
			color: ${Colors.white};
			font-size: 1.4rem;
		}
	}
`;

export const SearchContainer = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 600px;
	min-width: 200px;
	max-width: 600px;

	svg {
		&.search {
			z-index: 1;
			margin-right: -30px;
		}

		&.close {
			z-index: 1;
			margin-left: -30px;
		}
	}

	input {
		color: ${Colors.white};
		background-color: ${Colors.black};
		outline: none;
		border: none;
		font-size: 1rem;
		line-height: 2.6rem;
		z-index: 0;
		padding: 0 40px;
		width: 100%;
	}

	button {
		color: ${Colors.white};
		border: none;
		outline: none;
		margin-left: 14px;
		background-color: #282828;
		cursor: pointer;

		&.submit {
			height: 40px;
			width: 60px;
			margin-left: 10px;
		}

		&.microphone {
			border-radius: 30px;
			width: 50px;
			height: 40px;
		}
	}
`;

export const UserActionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 200px;

	svg {
		cursor: pointer;
	}

	.notifications {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;

		span.count {
			position: absolute;
			top: -7px;
			right: -5px;
			background-color: ${Colors.youtubeRed};
			border-radius: 50px;
			font-size: 0.7rem;
			font-weight: 600;
			padding: 2px;
		}
	}

	img {
		width: 35px;
		border-radius: 50px;
		cursor: pointer;
	}
`;
