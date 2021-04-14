import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: MemoryRouter });
  })
  test('it renders a navigation bar', () => {
    const nav = screen.queryByRole('navigation');
    expect(nav).toBeInTheDocument();
  })
})
