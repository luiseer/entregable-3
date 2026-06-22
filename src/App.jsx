import SearchBox from './components/SearchBox'
import LocationInfo from './components/LocationInfo'
import ResidentGrid from './components/ResidentGrid'
import useLocation from './hooks/useLocation'

function App() {
  const { location, residents, loading, error, fetchRandom, searchLocation } = useLocation()

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-icon">🔫</span>
          Rick & Morty
        </h1>
        <p className="app-subtitle">Explorador de Ubicaciones</p>
      </header>

      <SearchBox onSearch={searchLocation} onRandom={fetchRandom} loading={loading} error={error} />

      {loading && !location && (
        <ResidentGrid residents={[]} loading={true} />
      )}

      {location && !error && (
        <>
          <LocationInfo location={location} />
          <section className="resident-section">
            <h2 className="resident-section-title">👥 Personajes en esta ubicación</h2>
            <ResidentGrid residents={residents} loading={loading} />
          </section>
        </>
      )}
    </div>
  )
}

export default App
