import React, { Component } from 'react';

function Input({ handler, id, name, children }) {
	return (
		<>
			<input
				type="number"
				placeholder={children}
				onChange={(e) => handler(e.target.value)}
				id={id}
				name={name}
				min="0"
				max="100"
				style={{ width: '55px' }}
			/>
		</>
	);
}

export default Input;
