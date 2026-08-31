import { useEffect, useState } from 'react'

const COINGECKO_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
const REFRESH_INTERVAL_MS = 60000

// Busca a cotação real do BTC/USD na CoinGecko e atualiza a cada 30s.
export default function useBtcPrice() {
  const [price, setPrice] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchPrice() {
      try {
        const res = await fetch(COINGECKO_URL)
        if (!res.ok) throw new Error('Falha ao buscar cotação')
        const data = await res.json()
        if (!cancelled) {
          setPrice(data.bitcoin.usd)
          setError(null)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, REFRESH_INTERVAL_MS)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  return { price, error, loading }
}
