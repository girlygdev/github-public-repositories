import { useEffect, useState } from 'react'
import axios from 'axios'

const useQuery = (query, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setData([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)

    let cancel

    axios({
      method: 'GET',
      url: 'https://api.github.com/search/repositories',
      params: {
        q: `language:${query}`,
        sort: 'stars',
        order: 'desc',
        per_page: 10,
        page: pageNumber
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(response => {
        const data = response.data

        // Append new data to previous records
        // Store data to a new set of array to avoid duplicates
        setData(prevData => {
          return [...new Set([...prevData, ...data.items])]
        })

        setHasMore(data.items.length > 0)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)

        if (axios.isCancel(error)) return
      })

    return () => cancel()

  }, [query, pageNumber])

  return { loading, error, data, hasMore }
}

export default useQuery