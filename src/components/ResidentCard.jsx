const ResidentCard = ({ character }) => {
  const statusClass =
    character.status === 'Alive' ? 'status-alive' :
    character.status === 'Dead' ? 'status-dead' : 'status-unknown'

  return (
    <article className="card">
      <div className="card-img-wrapper">
        <img src={character.image} alt={character.name} />
      </div>
      <h3 className="card-name">{character.name}</h3>
      <span className={`status-badge ${statusClass}`}>
        <span className="status-dot" />
        {character.status}
      </span>
      <p className="card-detail">
        <span className="detail-label">Especie:</span> {character.species}
      </p>
      <p className="card-detail">
        <span className="detail-label">Origen:</span> {character.origin?.name}
      </p>
    </article>
  )
}

export default ResidentCard
