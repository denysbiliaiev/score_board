import { render, screen } from '@testing-library/react';
import App from './App';

test('init render', () => {
  render(<App />);
  const element = screen.getByText(/Score board/i);
  expect(element).toBeInTheDocument();
});
