import { useState, useEffect, useCallback } from 'react'
import { getLocationById, searchLocationByName, getCharacter } from '../services/api'

const useLocation = () => {
  const [location, setLocation] = useState(null)
  const [residents, setResidents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchResidents = useCallback(async (locationData) => {
    if (!locationData?.residents?.length) {
      setResidents([])
      return
    }
    const results = await Promise.allSettled(
      locationData.residents.map(url => getCharacter(url))
    )
    const chars = results
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value)
    setResidents(chars)
  }, [])

  const fetchRandom = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const id = Math.floor(Math.random() * 126) + 1
      const data = await getLocationById(id)
      if (data.error) {
        setError('😰 No encontramos esa ubicación en ninguna dimensión')
        setLocation(null)
        setResidents([])
      } else {
        setLocation(data)
        await fetchResidents(data)
      }
    } catch {
      setError('😰 No encontramos esa ubicación en ninguna dimensión')
      setLocation(null)
      setResidents([])
    } finally {
      setLoading(false)
    }
  }, [fetchResidents])

  const searchLocation = useCallback(async (query) => {
    setLoading(true)
    setError(null)
    try {
      const isNum = /^\d+$/.test(query)
      let data, locationData

      if (isNum) {
        const id = parseInt(query, 10)
        if (id < 1 || id > 126) {
          setError('El número debe estar entre 1 y 126')
          setLocation(null)
          setResidents([])
          return
        }
        data = await getLocationById(id)
        if (data.error) {
          setError('😰 No encontramos esa ubicación en ninguna dimensión')
          setLocation(null)
          setResidents([])
          return
        }
        locationData = data
      } else {
        data = await searchLocationByName(query)
        if (data.error || !data.results?.length) {
          setError('😰 No encontramos esa ubicación en ninguna dimensión')
          setLocation(null)
          setResidents([])
          return
        }
        locationData = data.results[0]
      }

      setLocation(locationData)
      await fetchResidents(locationData)
    } catch {
      setError('😰 No encontramos esa ubicación en ninguna dimensión')
      setLocation(null)
      setResidents([])
    } finally {
      setLoading(false)
    }
  }, [fetchResidents])

  useEffect(() => {
    fetchRandom()
  }, [fetchRandom])

  return { location, residents, loading, error, fetchRandom, searchLocation }
}

export default useLocation
