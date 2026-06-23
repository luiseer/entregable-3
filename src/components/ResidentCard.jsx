const FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect fill="%231a1a2e" width="300" height="300"/%3E%3Ctext fill="%23a0a0a0" font-family="Inter" font-size="64" x="50%25" y="50%25" text-anchor="middle" dy=".35em"%3E?%3C/text%3E%3C/svg%3E'

const ResidentCard = ({ character }) => {
  const statusClass =
    character.status === 'Alive' ? 'status-alive' :
    character.status === 'Dead' ? 'status-dead' : 'status-unknown'

  return (
    <article className="resident-card">
      <div className="resident-card-img-wrapper">
        <img
          className="resident-card-img"
          src={character.image}
          alt={character.name}
          onError={(e) => { e.target.src = FALLBACK }}
        />
        <span className={`resident-card-status ${statusClass}`}>
          <span className="status-dot" />
          {character.status}
        </span>
      </div>
      <div className="resident-card-body">
        <h3 className="resident-card-name">{character.name}</h3>
        <p className="resident-card-detail">{character.species}</p>
        <p className="resident-card-detail resident-card-origin">{character.origin?.name}</p>
      </div>
    </article>
  )
}

export default ResidentCard
