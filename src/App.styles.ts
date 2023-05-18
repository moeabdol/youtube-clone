import styled, { createGlobalStyle } from 'styled-components';
import Colors from './utils/Colors';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Roboto';
		src: url(${RobotoRegular}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		font-weight: 400;
		color: ${Colors.white};
		background-color: ${Colors.black};
		height: 100vh;
	}

	#root {
		width: 100%;
		height: 100%;
	}

	::-webkit-scrollbar {
		background-color: transparent;
		width: 0.5rem;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${Colors.grey};
		border-radius: 1rem;
	}
`;

export const BodyContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: felx-start;
`;
