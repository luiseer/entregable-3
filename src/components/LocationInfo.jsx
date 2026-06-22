const LocationInfo = ({ location }) => {
  return (
    <section className="location-section">
      <h2 className="location-section-title">📍 Información de la ubicación</h2>
      <div className="location-pills">
        <div className="location-pill">
          <span className="location-pill-label">Nombre</span>
          <span className="location-pill-value">{location.name}</span>
        </div>
        <div className="location-pill">
          <span className="location-pill-label">Tipo</span>
          <span className="location-pill-value">{location.type}</span>
        </div>
        <div className="location-pill">
          <span className="location-pill-label">Dimensión</span>
          <span className="location-pill-value">{location.dimension}</span>
        </div>
        <div className="location-pill">
          <span className="location-pill-label">Residentes</span>
          <span className="location-pill-value">{location.residents?.length}</span>
        </div>
      </div>
    </section>
  )
}

export default LocationInfo
