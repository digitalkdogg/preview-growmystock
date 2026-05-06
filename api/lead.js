import 'dotenv/config.js'
import pool from './db.js'

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'https://digitalkdogg.github.io'
const rateLimitMap = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const lastRequest = rateLimitMap.get(ip) || 0

  if (now - lastRequest < 60000) {
    return true
  }

  rateLimitMap.set(ip, now)
  return false
}

export default async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN)
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  // CORS header
  res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN)

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const { name, email, company, message } = req.body

    // Validation
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

    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown'

    // Rate limiting
    if (isRateLimited(ip)) {
      return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later.' })
    }

    if (!pool) {
      console.error('Database pool not initialized')
      return res.status(500).json({ ok: false, error: 'Database connection failed' })
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
    console.error('Lead error:', error.message, error.code)
    res.status(500).json({ ok: false, error: error.message || 'Failed to submit form' })
  }
}
