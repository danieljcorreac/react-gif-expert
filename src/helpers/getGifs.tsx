import { Gif, GifsSearchResponse } from '../interfaces/gifs.interfaces';

const getGifs = async (category: string): Promise<Gif[]> => {
    //const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${import.meta.env.VITE_API_KEY}`;
    
    const key = 'xEOWFmcfppZDMAonni3H0hzTRrHGDgMh';
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${key}`;

    const resp = await fetch(url);
    const { data } = await resp.json() as GifsSearchResponse;

    const gifs = data.map(({ id, title, images}): Gif => ({
        id,
        title,
        url: images.downsized_medium.url
    }));

    return gifs;
};

export default getGifs;