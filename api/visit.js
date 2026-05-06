import 'dotenv/config.js'
import pool from './db.js'

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'https://digitalkdogg.github.io'

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
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
    const userAgent = req.headers['user-agent'] || 'unknown'

    if (!pool) {
      console.error('Database pool not initialized')
      return res.status(500).json({ ok: false, error: 'Database connection failed' })
    }

    const connection = await pool.getConnection()
    await connection.execute('INSERT INTO preview_visits (ip_address, user_agent) VALUES (?, ?)', [ip, userAgent])
    connection.release()

    res.json({ ok: true })
  } catch (error) {
    console.error('Visit error:', error.message, error.code)
    res.status(500).json({ ok: false, error: error.message || 'Failed to log visit' })
  }
}
