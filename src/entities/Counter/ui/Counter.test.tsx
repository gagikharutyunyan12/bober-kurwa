import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('test increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const incrementBtn = screen.getByTestId('increment-btn');
        expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('test decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const decrementBtn = screen.getByTestId('decrement-btn');
        expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
        userEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
