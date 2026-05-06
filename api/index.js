import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import pool from './db.js'

const app = express()
const PORT = process.env.PORT || 3001

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'https://digitalkdogg.github.io'

app.use(express.json())
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ['POST'],
    credentials: false,
  }),
)

const rateLimitMap = new Map()

function getRateLimitKey(ip) {
  return `lead:${ip}`
}

function isRateLimited(ip) {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  const lastRequest = rateLimitMap.get(key) || 0

  if (now - lastRequest < 60000) {
    return true
  }

  rateLimitMap.set(key, now)
  return false
}

app.post('/api/visit', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
    const userAgent = req.headers['user-agent'] || 'unknown'

    const connection = await pool.getConnection()
    await connection.execute('INSERT INTO preview_visits (ip_address, user_agent) VALUES (?, ?)', [ip, userAgent])
    connection.release()

    res.json({ ok: true })
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Failed to log visit' })
  }
})

app.post('/api/lead', async (req, res) => {
  try {
    const { name, email, company, message } = req.body

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Name is required' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Valid email is required' })
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Message is required' })
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'

    if (isRateLimited(ip)) {
      return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later.' })
    }

    const userAgent = req.headers['user-agent'] || 'unknown'
    const companyValue = company || null

    const connection = await pool.getConnection()
    await connection.execute(
      'INSERT INTO preview_leads (name, email, company, message, ip_address, user_agent) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, companyValue, message, ip, userAgent],
    )
    connection.release()

    res.json({ ok: true })
  } catch (error) {
    console.error('Error inserting lead:', error)
    res.status(500).json({ ok: false, error: 'Failed to submit form' })
  }
})

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})
