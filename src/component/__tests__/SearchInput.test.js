import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '../SearchInput';

const searchFn = jest.fn();

describe('search input', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<SearchInput />);
    
    expect(view).toMatchSnapshot();
  });

  it('calls search fn on click', async () => {

    expect.hasAssertions();

    render(<SearchInput search={searchFn} />);
    
    userEvent.type(screen.getByPlaceholderText('Keyword...'), 'spaceship');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(searchFn).toHaveBeenCalledWith('spaceship');
    });
  });
});