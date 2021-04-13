import Like from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Like', () => {
  beforeEach(() => {
    render(<Like />);
  })

  test('renders in a button for liking', () => {
    const likeButton = screen.getByRole('switch');
    expect(likeButton).toBeInTheDocument();
  })

  test('changes color to gold when liked', () => {
    let likeButton = screen.getByRole('switch');
    let initColor = likeButton.style.color;
    userEvent.click(likeButton);
    let newColor = likeButton.style.color;
    expect(newColor).not.toBe(initColor);
  })

  test('check that class name changes when liked', () => {
    let likeButton = screen.getByRole('switch');
    let initClass = likeButton.className;
    userEvent.click(likeButton);
    let newClass = likeButton.className;
    expect(newClass).not.toBe(initClass);
  })
});