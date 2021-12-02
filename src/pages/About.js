import React from 'react';
import ReactDOM from 'react-dom';

const About = () => {

	const element = 'Sobre o projeto';

	return (
		ReactDOM.render(element, document.getElementById('appView'))
	);
}

export default About;