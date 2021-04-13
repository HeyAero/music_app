import { screen } from '@testing-library/react';
import Welcome from '.';

describe('Welcome', () => {
  beforeEach(() => {
    render(<Welcome />);
  })

  test('sets current name to be stranger when no name has been given', () => {
    const name = screen.getByRole('heading', {id: 'welcome'});
    expect(name.textContent).toBe("Here are some of our songs, stranger:");
  })
});

describe('Welcome Alt', () => {
  beforeEach(() => {
    let name = "Aaron";
    render(<Welcome name={name}/>);
  })

  test('sets current name to be Aaron', () => {
    const name = screen.getByRole('heading', {id: 'welcome'});
    expect(name.textContent).toBe("Here are some of our songs, Aaron:");
  })
});