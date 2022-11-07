import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render without error', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })
});
