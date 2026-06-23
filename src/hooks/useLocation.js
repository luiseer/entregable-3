import { useState, useEffect, useCallback } from 'react'
import { getLocationById, searchLocationByName, getCharacter } from '../services/api'

const PAGE_SIZE = 20

const useLocation = () => {
  const [location, setLocation] = useState(null)
  const [residentUrls, setResidentUrls] = useState([])
  const [residents, setResidents] = useState([])
  const [fetchedCount, setFetchedCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchBatch = useCallback(async (urls, start) => {
    const batch = urls.slice(start, start + PAGE_SIZE)
    if (!batch.length) return []
    const results = await Promise.allSettled(batch.map(url => getCharacter(url)))
    return results
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value)
  }, [])

  const initLocation = useCallback(async (locationData) => {
    const urls = locationData.residents || []
    setLocation(locationData)
    setResidentUrls(urls)
    setResidents([])
    setFetchedCount(0)

    if (!urls.length) return

    setLoading(true)
    const chars = await fetchBatch(urls, 0)
    setResidents(chars)
    setFetchedCount(Math.min(PAGE_SIZE, urls.length))
    setLoading(false)
  }, [fetchBatch])

  const loadMore = useCallback(async () => {
    if (loading || fetchedCount >= residentUrls.length) return
    setLoading(true)
    const chars = await fetchBatch(residentUrls, fetchedCount)
    setResidents(prev => [...prev, ...chars])
    setFetchedCount(prev => Math.min(prev + PAGE_SIZE, residentUrls.length))
    setLoading(false)
  }, [loading, fetchedCount, residentUrls, fetchBatch])

  const fetchRandom = useCallback(async () => {
    setLoading(true)
    setError(null)
    let attempts = 0
    while (attempts < 20) {
      const id = Math.floor(Math.random() * 126) + 1
      try {
        const data = await getLocationById(id)
        if (!data.error && data.residents?.length) {
          await initLocation(data)
          return
        }
      } catch {}
      attempts++
    }
    setError('😰 No encontramos esa ubicación en ninguna dimensión')
    setLocation(null)
    setResidentUrls([])
    setResidents([])
    setLoading(false)
  }, [initLocation])

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
          setResidentUrls([])
          setResidents([])
          return
        }
        data = await getLocationById(id)
        if (data.error) {
          setError('😰 No encontramos esa ubicación en ninguna dimensión')
          setLocation(null)
          setResidentUrls([])
          setResidents([])
          return
        }
        locationData = data
      } else {
        data = await searchLocationByName(query)
        if (data.error || !data.results?.length) {
          setError('😰 No encontramos esa ubicación en ninguna dimensión')
          setLocation(null)
          setResidentUrls([])
          setResidents([])
          return
        }
        locationData = data.results[0]
      }

      await initLocation(locationData)
    } catch {
      setError('😰 No encontramos esa ubicación en ninguna dimensión')
      setLocation(null)
      setResidentUrls([])
      setResidents([])
    } finally {
      setLoading(false)
    }
  }, [initLocation])

  useEffect(() => { fetchRandom() }, [fetchRandom])

  const hasMore = fetchedCount < residentUrls.length

  return { location, residents, loading, error, hasMore, loadMore, fetchRandom, searchLocation }
}

export default useLocation
