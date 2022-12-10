import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(<Footer />);
        });
        test('Then it should display the Copyright', () => {
            const element = screen.getByText(/reserved/i);
            expect(element).toBeInTheDocument();
        });
    });
});
