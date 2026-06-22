import ResidentCard from './ResidentCard'

const ResidentsList = ({ residents, loading }) => {
  if (loading) {
    return (
      <div className="grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card skeleton-card">
            <div className="skeleton skeleton-img" />
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text skeleton-text--sm" />
          </div>
        ))}
      </div>
    )
  }

  if (!residents.length) {
    return (
      <p className="no-residents">No hay residentes en esta ubicación</p>
    )
  }

  return (
    <div className="grid">
      {residents.map((char) => (
        <ResidentCard key={char.id} character={char} />
      ))}
    </div>
  )
}

export default ResidentsList
