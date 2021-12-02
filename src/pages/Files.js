import React from 'react';
import ReactDOM from 'react-dom';

const Files = () => {

	const element = 'Meus arquivos';

	return (
		ReactDOM.render(element, document.getElementById('appView'))
	);
}

export default Files;