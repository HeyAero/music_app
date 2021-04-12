import Like from './Like';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Like', () => {
  beforeEach(() => {
    render(<Like />);
  })

  test('renders in a button for liking', () => {
    let likeButton = screen.getByRole('switch');
    expect(likeButton).toBeInTheDocument();
  })

  test('changes color to gold when liked', () => {
    let likeButton = screen.getByRole('switch');
    let initColor = likeButton.style.color;
    userEvent.click(likeButton);
    let newColor = likeButton.style.color;
    expect(newColor).not.toBe(initColor);
  })
});