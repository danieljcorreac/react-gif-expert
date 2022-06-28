import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

interface Props {
    category: string;
}

const GifGrid = ({ category }: Props) => {

    const { isLoading, gifs } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    isLoading
                        ? <h2>Cargando...</h2>
                        : gifs.map(({ id, ...rest }) => (
                            <GifItem key={id} {...rest} />
                        ))
                }
            </div>        
            
        </>
    )
}

export default GifGrid
