import React from 'react';
import { Container } from './styles';
import { ImSpinner8 } from 'react-icons/im';

function Spinner() {
	return (
		<Container>
			<ImSpinner8 size={42} className="spinner" />
		</Container>
	);
}

export default Spinner;
