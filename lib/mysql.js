
import mysql from 'mysql2/promise';

let pool;

export default async function getConnection() {
  if (!pool) {
    try {
      pool = mysql.createPool({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'eficsy',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
      });
      
      // Test the connection
      await pool.query('SELECT 1');
    } catch (error) {
      console.error('MySQL connection error:', error);
      throw new Error('Failed to connect to MySQL database');
    }
  }
  return pool;
}
