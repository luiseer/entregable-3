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
