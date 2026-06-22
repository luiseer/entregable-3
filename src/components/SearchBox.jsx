import { useState } from 'react'

const SearchBox = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) {
      setError('Por favor ingresa un nombre o número')
      return
    }
    setError('')
    onSearch(query.trim())
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            if (error) setError('')
          }}
          placeholder="Busca por nombre o número (ej: Earth, 3)"
          className={error ? 'input-error' : ''}
        />
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? <span className="spinner" /> : 'Buscar'}
        </button>
      </div>
      {error && <p className="search-error">{error}</p>}
    </form>
  )
}

export default SearchBox
