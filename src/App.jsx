import SearchBox from './components/SearchBox'
import LocationInfo from './components/LocationInfo'
import ResidentsList from './components/ResidentsList'
import useLocation from './hooks/useLocation'

function App() {
  const { location, residents, loading, error, fetchLocation } = useLocation()

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-icon">🔫</span>
          Rick & Morty
        </h1>
        <p className="app-subtitle">Location Explorer</p>
      </header>

      <SearchBox onSearch={fetchLocation} loading={loading} />

      {error && (
        <div className="error-card">
          <span className="error-emoji">😰</span>
          <p className="error-message">{error}</p>
        </div>
      )}

      {loading && !location && !error && (
        <ResidentsList residents={[]} loading={true} />
      )}

      {location && !error && (
        <>
          <LocationInfo location={location} />
          <ResidentsList residents={residents} loading={loading} />
        </>
      )}
    </div>
  )
}

export default App
