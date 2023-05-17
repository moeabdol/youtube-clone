import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const Container = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: ${Colors.offBlack};
	width: 230px;
	height: 100%;
	padding: 20px;

	ul {
		list-style-type: none;
		width: 100%;

		li.item {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			height: 50px;

			span {
				font-size: 1rem;
				margin-left: 10px;
			}
		}
	}

	hr.separator {
		width: 100%;
		color: ${Colors.white};
		margin: 20px 0;
	}
`;
