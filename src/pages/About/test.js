import { screen } from '@testing-library/react';
import About from '.';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  })

  test("it renders", () => {
    const main = screen.getByRole('main');
    expect(main).toBeDefined();
  });
})
