import React, { Component } from 'react';

function Checkbox({ handler, checked, disabled, id, value, children }) {
	return (
		<div>
			<input
				type="checkbox"
				onChange={handler}
				checked={checked}
				disabled={disabled}
				id={id}
				name={{ value }}
				value={value}
			/>
			<label htmlFor={id}>{children}</label>
		</div>
	);
}

export default Checkbox;
