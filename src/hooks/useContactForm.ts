import { useState } from 'react'

interface Fields {
  name: string
  email: string
  company: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function useContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(): Record<string, string> {
    const newErrors: Record<string, string> = {}

    if (!fields.name || fields.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!fields.email || !emailRegex.test(fields.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!fields.message || fields.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus('submitting')

    try {
      const API = import.meta.env.VITE_API_URL
      if (!API) {
        setStatus('error')
        return
      }

      const res = await fetch(`${API}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (data.ok) {
        setStatus('success')
        setFields({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return {
    fields,
    setFields,
    errors,
    setErrors,
    status,
    submit,
  }
}
