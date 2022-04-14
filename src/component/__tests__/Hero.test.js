import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../Hero';

describe('description', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('renders w/o crashing', () => {
        expect.hasAssertions();

        const view = render(<Hero />);

        expect(view).toMatchSnapshot();
    });
});