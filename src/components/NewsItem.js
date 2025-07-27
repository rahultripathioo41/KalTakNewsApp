function NewsItem(props) {
  return (
    <div className="card" style={{ height: '100%', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        <img className="card-img-top" src={props.imageUrl} alt="Card cap" style={{ height: '200px', objectFit: 'cover' }} />
        <span className="badge badge-primary" style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#007bff',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '5px'
        }}>
          {props.source}
        </span>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {props.title}
        </h5>
        <p className="card-text" style={{
          fontSize: '0.9rem',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {props.desc}
        </p>
        <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto"><strong>Read more</strong></a>
      </div>
    </div>
  );
}
export default NewsItem;