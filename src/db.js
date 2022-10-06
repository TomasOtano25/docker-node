import { createPool } from 'mysql2'

export const pool = createPool({
  user: 'root',
  password: 'tompassword',
  host: 'mymysql',
  database: 'tomdb',
  port: 3306
})


