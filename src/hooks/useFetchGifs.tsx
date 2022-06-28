import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';
import { Gif } from '../interfaces/gifs.interfaces';

const useFetchGifs = (category: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const fetchGifs = async () => {
        const gifs = await getGifs(category);
        setGifs(gifs);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchGifs();
    }, []);

    return {
        isLoading,
        gifs
    };
}

export default useFetchGifs