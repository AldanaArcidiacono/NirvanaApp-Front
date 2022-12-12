import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { NewPlace } from './new.place';

describe('Given NewPlace component', () => {
    describe('When we render the component', () => {
        test('Then it should display the newPlace form', () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <NewPlace></NewPlace>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/Agrega/i);
            expect(element).toBeInTheDocument();
        });
    });
});
