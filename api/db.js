import mysql from 'mysql2/promise.js'

if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_DATABASE) {
  console.warn('Missing database environment variables:', {
    DB_HOST: !!process.env.DB_HOST,
    DB_PORT: !!process.env.DB_PORT,
    DB_USER: !!process.env.DB_USER,
    DB_PASSWORD: !!process.env.DB_PASSWORD,
    DB_DATABASE: !!process.env.DB_DATABASE,
  })
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: { rejectUnauthorized: false },
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
})

pool.on('error', (err) => {
  console.error('Pool error:', err.message)
})

export default pool
