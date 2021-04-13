import Music from '.';
import { render, screen } from '@testing-library/react';

describe('Music', () => {

  const music = [{ id: 1, song: "Danny Nedelko", album: "Joy as an Act of Resistance", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Idles_-_Danny_Nedelko.jpg/220px-Idles_-_Danny_Nedelko.jpg", link: "https://www.idlesband.com/uk/"}];

  beforeEach(() => {
    render(<Music music={music} />);
  })

  test('loads with test data', () => {
    const image = screen.getByAltText('Album Cover');
    expect(image.src).toBeDefined();
  })
})
