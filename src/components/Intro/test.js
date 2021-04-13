import Intro from '.';
import { render, screen } from '@testing-library/react';

describe('Intro', () => {
  beforeEach(() => {
    render(<Intro />);
  })

  test("renders the image", () => {
    const image = screen.getByAltText('IDLES');
    expect(image.src).toBeDefined();
  });
})
