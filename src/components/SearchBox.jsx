import { useState } from 'react'

const SearchBox = ({ onSearch, onRandom, loading, error }) => {
  const [query, setQuery] = useState('')
  const [localError, setLocalError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = query.trim()
    if (!value) {
      setLocalError('Escribe un número de dimensión (1-126) o un nombre')
      return
    }
    const isNum = /^\d+$/.test(value)
    if (isNum) {
      const num = parseInt(value, 10)
      if (num < 1 || num > 126) {
        setLocalError('El número debe estar entre 1 y 126')
        return
      }
    }
    setLocalError('')
    onSearch(value)
  }

  return (
    <div className="search-box">
      <label className="search-label">🌌 Buscar ubicación</label>
      <form onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              if (localError) setLocalError('')
            }}
            placeholder="Nro de dimensión (1-126) o nombre (ej: Earth, Citadel)"
            className={localError || error ? 'input-error' : ''}
          />
          <button type="submit" className="search-btn" disabled={loading}>
            {loading ? <span className="spinner" /> : 'Buscar'}
          </button>
          <button
            type="button"
            className="search-btn search-btn--random"
            onClick={onRandom}
            disabled={loading}
          >
            🎲 Aleatoria
          </button>
        </div>
      </form>
      {(localError || error) && (
        <p className="search-error">{localError || error}</p>
      )}
    </div>
  )
}

export default SearchBox
