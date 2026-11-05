
function Card({ title, description, children }) {
  return (
    <div className="custom-card">
      {title && <h3 className="card-title">{title}</h3>}

      {description && (
        <p className="card-description">{description}</p>
      )}

      {children && (
        <div className="card-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Card;
