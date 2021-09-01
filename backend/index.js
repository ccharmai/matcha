const express = require('express');
const Pool = require('pg').Pool
const cors = require("cors");
const db = require('./db/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const pool = new Pool({ user: 'ccharmai', host: '127.0.0.1', database: 'matcha', password: '', port: 5432 });

// login user via token
app.post('/api/login', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  if (!login || !password) return res.status(400).json({ status: 'fail', msg: 'Не передан логин или пароль' });
  const user = await db.getUserByLoginPassword(pool, login, password);
  if (!user) return res.status(403).json({ status: 'fail', msg: 'Не правильный логин или пароль' });
  const token = await db.getOrCreateUserToken(pool, user.id)
	return res.json({ status: 'ok', user: { login: user.login, name: user.name, lastname: user.lastname, admin: user.admin, token: token } });
});

// login user via token
app.post('/api/token', async (req, res) => {
  const token = req.body.token;
  if (!token) return res.status(400).json({ status: 'fail', msg: 'Не передан токен' });
  const user = await db.getUserByToken(pool, token);
  if (!user) return res.status(403).json({ status: 'fail', msg: 'Токен не валиден' });
  return res.json({ status: 'ok', user: { login: user.login, name: user.name, lastname: user.lastname, admin: user.admin, token: token } })
});

// create user account
app.post('/api/signup', (req, res) => {
	console.log(req.body.name);
	return res.json({ status: 'ok' });
});

// check available email or login
app.post('/api/available', async (req, res) => {
	let login = req.body.login, email = req.body.email;
	if (!login && !email) return res.status(400).json({ status: 'fail', msg: 'Не передан логин или пароль' });
	let answer = {};
	if (login) answer.login =  await db.getUserByLogin(pool, login) ? false : true;
	if (email) answer.email =  await db.getUserByEmail(pool, email) ? false : true;
	return res.json(answer);
});

async function start() {
	await db.init(pool);
	app.listen(5000, () => { console.log('Start server') });
}

start();
