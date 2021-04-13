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

  // test('sets current name to be Aaron', () => {
  //   const nameInput = screen.getByLabelText('Let us know your name:')
  //   userEvent.type(nameInput, "Aaron{enter}");
  //   const name = screen.getByRole('welcomeMessage');
  //   expect(name.textContent).toBe("Here are some of our songs, Aaron:");
  // })

  // test('does not change the name when a user enters input', () => {
  //   const nameInput = screen.getByLabelText('Let us know your name:')
  //   userEvent.type(nameInput, "Aaron");
  //   const name = screen.getByRole('welcomeMessage');
  //   expect(name.textContent).toBe("Here are some of our songs, stranger:");
  //   expect(nameInput.value).toBe("Aaron");
  // })
})
