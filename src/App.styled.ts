import { createGlobalStyle } from 'styled-components';
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
	}
`;
