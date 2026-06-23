import { useState } from 'react'

const ResidentCard = ({ character }) => {
  const [imgFailed, setImgFailed] = useState(false)

  const statusClass =
    character.status === 'Alive' ? 'status-alive' :
    character.status === 'Dead' ? 'status-dead' : 'status-unknown'

  return (
    <article className="resident-card">
      <div className="resident-card-img-wrapper">
        {imgFailed ? (
          <div className="resident-card-img-fallback" />
        ) : (
          <img
            className="resident-card-img"
            src={character.image}
            alt={character.name}
            onError={() => setImgFailed(true)}
          />
        )}
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
