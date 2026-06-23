import { useState } from 'react'
import SearchBox from './components/SearchBox'
import LocationInfo from './components/LocationInfo'
import ResidentGrid from './components/ResidentGrid'
import CharacterDetail from './components/CharacterDetail'
import useLocation from './hooks/useLocation'

function App() {
  const { location, residents, loading, error, hasMore, loadMore, fetchRandom, searchLocation } = useLocation()
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  if (selectedCharacter) {
    return (
      <div className="app">
        <CharacterDetail character={selectedCharacter} onBack={() => setSelectedCharacter(null)} />
      </div>
    )
  }

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
            <ResidentGrid
              residents={residents}
              loading={loading}
              hasMore={hasMore}
              onLoadMore={loadMore}
              total={location.residents?.length}
              onSelect={setSelectedCharacter}
            />
          </section>
        </>
      )}
    </div>
  )
}

export default App
