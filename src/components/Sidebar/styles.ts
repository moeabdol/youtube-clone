import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const Container = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: ${Colors.offBlack};
	opacity: 0.95;
	width: 230px;
	height: 100%;
	z-index: 3;
	overflow: auto;

	ul {
		list-style-type: none;
		width: 100%;

		li.item a {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			height: 50px;
			padding: 0px 20px;
			color: ${Colors.white};
			text-decoration: none;

			span {
				font-size: 1rem;
				margin-left: 10px;
			}

			&:hover {
				background-color: ${Colors.black};
			}
		}
	}

	hr.separator {
		width: 80%;
		margin: 10px 0;
		border: none;
		border-top: 1px solid ${Colors.white};
	}

	ul.links {
		padding: 10px 20px;

		li {
			margin: 5px 0;

			a {
				color: ${Colors.white};
				margin-right: 10px;
				text-decoration: none;
			}
		}
	}

	.copyright {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0px 20px 10px 20px;
	}

	.disclaimer {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0 20px;
		padding-bottom: 80px;
		color: ${Colors.grey};
		font-size: 0.75rem;
	}
`;
