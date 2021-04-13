import Button from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {

  const href = "test.com";
  const name = "Test";

  beforeEach(() => {
    render(<Button href={href} name={name} />);
  })

  test("renders a button", () => {
    const button = screen.getByText('Test');
    expect(button.href).toContain(href);
  });
})
