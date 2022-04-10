import { render, screen } from '@testing-library/react';
import Description from '../Description';
import { DESCRIPTION } from '../../Config'

describe('description', () => {
    it('renders w/o crashing', () => {
        expect.hasAssertions();

        const view = render(<Description />);

        expect(view).toMatchSnapshot();
    });

    it('renders correct content from config', () => {
        expect.hasAssertions();

        render(<Description />)

        expect(screen.getByText(
            DESCRIPTION.para, DESCRIPTION.header
        )).toBeInTheDocument();
    });
});