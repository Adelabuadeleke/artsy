import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app shell with the nav brand', () => {
  render(<App />);
  expect(screen.getAllByText(/artsy\./i).length).toBeGreaterThan(0);
});
