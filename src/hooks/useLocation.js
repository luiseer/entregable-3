import { useState, useEffect, useCallback } from 'react'
import { getLocation, getCharacter, getLocationsByName } from '../services/api'

const useLocation = () => {
  const [location, setLocation] = useState(null)
  const [residents, setResidents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchLocation = useCallback(async (query) => {
    setLoading(true)
    setError(null)
    try {
      const isNum = /^\d+$/.test(query)
      let data
      if (isNum) {
        data = await getLocation(query)
      } else {
        data = await getLocationsByName(query)
      }
      if (data.error) {
        setError('Ubicación no encontrada')
        setLocation(null)
        setResidents([])
        return
      }
      const locationData = data.results ? data.results[0] : data
      setLocation(locationData)
      if (locationData.residents?.length) {
        const chars = await Promise.all(
          locationData.residents.map(url => getCharacter(url))
        )
        setResidents(chars)
      } else {
        setResidents([])
      }
    } catch {
      setError('Ubicación no encontrada')
      setLocation(null)
      setResidents([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const id = Math.floor(Math.random() * 126) + 1
    fetchLocation(String(id))
  }, [fetchLocation])

  return { location, residents, loading, error, fetchLocation }
}

export default useLocation
