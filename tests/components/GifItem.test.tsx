import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Tests in demo', () => {

    const url = 'https://one-punch.com/saitama.jpg';
    const title = 'Saitama';

    const renderGifItem = () => render(<GifItem url={url} title={title} />);

    test('GifItem debe hacer match con el snapshot', () => {
        
        const { container } = renderGifItem();
        expect(container).toMatchSnapshot();
        
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        
        renderGifItem();
        const { src, alt } = screen.getByRole<HTMLImageElement>('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => { 

        renderGifItem();        
        expect(screen.getByText(title)).toBeTruthy();

    });

});