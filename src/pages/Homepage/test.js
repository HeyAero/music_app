import { screen } from '@testing-library/react';
import Homepage from '.';

describe('Homepage', () => {
  beforeEach(() => {
    render(<Homepage />);
  })

  test("it renders", () => {
    const main = screen.getByRole('main');
    expect(main).toBeDefined();
  });
})
