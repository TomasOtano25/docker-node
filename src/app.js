import express from "express";
import { pool } from "./db.js"
import User from './models/User.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world 3!');
});

app.get('/users', async (req, res) => {
  const user = await User.create({
    username: 'admin',
    password: 'default',
  })
  res.json(user)
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT "pong" as RESULT')
  res.json(result)
})

export default app;