import { render, screen } from '@testing-library/react';
import App from './App';

test('renders w/o crashing', () => {
  render(<App />);
  const linkElement = screen.getByText('keyword-img');
  expect(linkElement).toBeInTheDocument();
});
