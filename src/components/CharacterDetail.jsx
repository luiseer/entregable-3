const CharacterDetail = ({ character, onBack }) => {
  const statusClass =
    character.status === 'Alive' ? 'status-alive' :
    character.status === 'Dead' ? 'status-dead' : 'status-unknown'

  const infoBlocks = [
    { label: 'Estado', value: character.status },
    { label: 'Especie', value: character.species },
    { label: 'Tipo', value: character.type || '—' },
    { label: 'Género', value: character.gender },
    { label: 'Origen', value: character.origin?.name },
    { label: 'Ubicación', value: character.location?.name },
    { label: 'Episodios', value: character.episode?.length },
    { label: 'Creado', value: new Date(character.created).toLocaleDateString() },
  ]

  return (
    <div className="detail-page">
      <button className="detail-back" onClick={onBack}>← Volver</button>

      <div className="detail-hero">
        <img className="detail-hero-img" src={character.image} alt={character.name} />
        <h1 className="detail-hero-name">{character.name}</h1>
        <span className={`detail-hero-status ${statusClass}`}>
          <span className="status-dot" />
          {character.status}
        </span>
      </div>

      <div className="detail-info-grid">
        {infoBlocks.map((block) => (
          <div key={block.label} className="detail-info-card">
            <span className="detail-info-label">{block.label}</span>
            <span className="detail-info-value">{block.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterDetail
