import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  })

  test('it renders a copooyright logo and idles name', () => {
    const content = screen.queryByText(/© IDLES 2021/);
    expect(content).toBeInTheDocument();
  })
})
