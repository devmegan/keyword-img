import { render, screen, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import ImgCard from '../ImgCard';

const loadingFn = jest.fn();
const errorFn = jest.fn();

describe('img card', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<ImgCard />);
    
    expect(view).toMatchSnapshot();
  });

  it('handles loading status onload', async () => {
    expect.hasAssertions();
   
    render(<ImgCard alt="alt" setError={errorFn} setLoading={loadingFn} src="spaceship" />);

    const imgRef = screen.getByAltText('alt');

    fireEvent.load(imgRef);

    await waitFor(() => {
        expect(loadingFn).toHaveBeenCalledWith(false);
    });
  });

  it('handles image 404 error', async () => {
    expect.hasAssertions();

    render(<ImgCard alt="alt" setError={errorFn} setLoading={loadingFn} src="/source-404?" />);
    
    const imgRef = screen.getByAltText('alt');

    fireEvent.load(imgRef);

    await waitFor(() => {
        expect(errorFn).toHaveBeenCalledWith("No images found");
    });
  });
});