import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');
const mockedUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>

describe('Tests in GifGrid', () => {

    const category = 'One Punch';

    const renderGifGrid = () => render(<GifGrid category={category} />);

    test('debe de mostrar el loading inicialmente', () => {

        mockedUseFetchGifs.mockReturnValue({ 
            isLoading: true,
            gifs: []
        });
        
        renderGifGrid();
        expect(screen.getByText(category)).toBeTruthy();
        expect(screen.getByText('Cargando...')).toBeTruthy();

    });

    test('debe de mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            { id: 'ABC', url: 'https://localhost/saitama.jpg', title: 'Saitama' },
            { id: 'DEF', url: 'https://localhost/goku.jpg', title: 'Goku' },
            { id: 'GHI', url: 'https://localhost/eren.jpg', title: 'Eren' }
        ];
        
        mockedUseFetchGifs.mockReturnValue({ 
            isLoading: false,
            gifs: gifs
        });

        renderGifGrid();
        expect(screen.getAllByRole('img').length).toBe(3);
        
    });

});