interface Props {
    url: string;
    title: string;
}

const GifItem = ({ url, title}: Props) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GifItem