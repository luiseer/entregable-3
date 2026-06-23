import ResidentCard from './ResidentCard'

const ResidentGrid = ({ residents, loading, hasMore, onLoadMore, total }) => {
  if (loading && !residents.length) {
    return (
      <div className="grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="resident-card resident-card--skeleton">
            <div className="skeleton resident-card-img-skeleton" />
            <div className="resident-card-body">
              <div className="skeleton skeleton-text" />
              <div className="skeleton skeleton-text skeleton-text--sm" />
              <div className="skeleton skeleton-text skeleton-text--xs" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!residents.length) {
    return (
      <p className="no-residents">Esta ubicación no tiene residentes registrados</p>
    )
  }

  return (
    <>
      <div className="grid">
        {residents.map((char) => (
          <ResidentCard key={char.id} character={char} />
        ))}
      </div>
      {hasMore && (
        <div className="load-more-wrapper">
          <button
            className="load-more-btn"
            onClick={onLoadMore}
            disabled={loading}
          >
            {loading ? <span className="spinner" /> : `Mostrar más (${residents.length} de ${total || '?'})`}
          </button>
        </div>
      )}
    </>
  )
}

export default ResidentGrid
