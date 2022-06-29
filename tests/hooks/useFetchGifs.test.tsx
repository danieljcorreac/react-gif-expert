import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from '../../src/hooks/useFetchGifs';

describe('Tests in useFetchGifs', () => {

    const category = 'One Punch';

    test('debe de regresar el estado inicial', () => {
        
        const { result } = renderHook(() => useFetchGifs(category));
        const { isLoading, gifs } = result.current;

        expect(isLoading).toBeTruthy();
        expect(gifs.length).toBe(0);

    });

    test('debe de regresar un arreglo de imagenes y isLoading en false', async () => {
        
        const { result } = renderHook(() => useFetchGifs(category));
        
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )

        const { isLoading, gifs } = result.current;

        expect(isLoading).toBeFalsy();
        expect(gifs.length).toBeGreaterThan(0);

    });


});