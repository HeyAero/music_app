import { screen } from '@testing-library/react';
import NotFound from '.';
import { MemoryRouter } from 'react-router-dom';

describe('NotFound', () => {
  beforeEach(() => {
    render(<NotFound />, { wrapper: MemoryRouter });
  })

  test("it renders", () => {
    const main = screen.getByRole('main');
    expect(main).toBeDefined();
  });
})
