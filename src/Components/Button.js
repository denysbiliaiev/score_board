import React, { Component } from 'react';

function Button({ handler, children }) {
	return (
		<button onClick={handler} style={{ marginRight: '5px' }}>
			{children}
		</button>
	);
}

export default Button;
