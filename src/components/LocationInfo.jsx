const LocationInfo = ({ location }) => {
  return (
    <div className="location-strip">
      <div className="location-card">
        <span className="location-icon">🌍</span>
        <span className="location-label">Ubicación</span>
        <span className="location-value">{location.name}</span>
      </div>
      <div className="location-card">
        <span className="location-icon">🏷️</span>
        <span className="location-label">Tipo de Lugar</span>
        <span className="location-value">{location.type}</span>
      </div>
      <div className="location-card">
        <span className="location-icon">🌌</span>
        <span className="location-label">Dimensión</span>
        <span className="location-value">{location.dimension}</span>
      </div>
      <div className="location-card">
        <span className="location-icon">👥</span>
        <span className="location-label">Residentes</span>
        <span className="location-value">{location.residents?.length}</span>
      </div>
    </div>
  )
}

export default LocationInfo
