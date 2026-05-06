import { useEffect } from 'react'

export function useVisitLogger() {
  useEffect(() => {
    const API = import.meta.env.VITE_API_URL
    if (API) {
      fetch(`${API}/api/visit`, { method: 'POST' }).catch(() => {})
    }
  }, [])
}
