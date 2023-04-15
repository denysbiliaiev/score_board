import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render boards', () => {
	render(<App />);
	const scoreboard = screen.getByText(/Scoreboard/i);
	const dashboard = screen.getByText(/Dashboard/i);
	expect(scoreboard).toBeInTheDocument();
	expect(dashboard).toBeInTheDocument();
});
