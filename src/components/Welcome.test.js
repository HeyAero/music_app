import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Welcome from './Welcome';

describe('Welcome', () => {
  beforeEach(() => {
    render(<Welcome />);
  })

  test('sets current name to be stranger when no name has been given', () => {
    const name = screen.getByRole('heading', {id: 'welcome'});
    expect(name.textContent).toBe("Here are some of our songs, stranger:");
  })

  test('does not change the name when a user enters input', () => {
    const nameInput = screen.getByLabelText('Let us know your name:')
    userEvent.type(nameInput, "Aaron");
    const name = screen.getByRole('heading', {id: 'welcome'});
    expect(name.textContent).toBe("Here are some of our songs, stranger:");
    expect(nameInput.value).toBe("Aaron");
  })
});