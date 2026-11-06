
function Card({ title, description, children }) {
  return (
    <div className="custom-card">
      {title && <h2>{title}</h2>}

      {description && <p>{description}</p>}

      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
