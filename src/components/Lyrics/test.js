import { screen } from '@testing-library/react';
import Lyrics from '.';

import axios from 'axios';
jest.mock('axios');

describe('Lyrics', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
  })

  test('it renders a loading message when no lyric is found yet', () => {
    axios.get.mockResolvedValue({data: {lyrics: 'Hey there fake lyrics\n lets do this!'}});
    render(<Lyrics/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })

  test('it displays a single lyric on the page', async () => {
    axios.get.mockResolvedValue({data: {lyrics: 'Hey there fake lyrics\n lets do this!'}});
    render(<Lyrics/>);
    expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/lyrics/));
    expect(await screen.findByText('Hey there fake lyrics')).toBeInTheDocument();
  })
  
  test('it should render an error message when api failed called', async () => {
    axios.get.mockRejectedValue(new Error('Did not find'))
    render(<Lyrics />);
    const findError = await screen.findByText('No lyrics found.');
    expect(findError).toBeInTheDocument();
  })

  test('it starts a 5 second interval on mount', async () => {
    axios.get.mockResolvedValue({data: {lyrics: 'Hey there fake lyrics\n lets do this!'}});
    render(<Lyrics />);
    expect(await setInterval).toHaveBeenCalledWith(expect.any(Function), 5000);
  })
  
  
})
