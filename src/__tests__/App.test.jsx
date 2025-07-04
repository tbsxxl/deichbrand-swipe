import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders message prop', () => {
  render(<App message="Hello" />);
  const div = screen.getByTestId('message');
  expect(div).toHaveTextContent('Hello');
});
