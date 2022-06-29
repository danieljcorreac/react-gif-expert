import { fireEvent, render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Tests in GifExpertApp', () => {

    const renderGifExpertApp = () => render(<GifExpertApp />);

    test('debe de mostrar el titulo', () => {
        
        renderGifExpertApp();
        expect(screen.getByText('GifExpertApp')).toBeTruthy();

    });

    test('debe agregar una categoria', () => {

        const newCategory = 'Dragon Ball'
        
        renderGifExpertApp();
        
        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        expect(screen.getByText(newCategory)).toBeTruthy();

    });

});