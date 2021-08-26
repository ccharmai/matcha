const express = require('express');
const Pool = require('pg').Pool
const cors = require("cors");

const app = express();
app.use(cors());

app.get('/', (req, res, next) => {
	res.json({ status: 'ok' });
});

const pool = new Pool({
	user: 'ccharmai',
	host: '127.0.0.1',
	database: 'matcha',
	password: '',
	port: 5432,
});

const create = require('./create.js');
create.abc();

async function start() {
	//await pool.query('DROP TABLE IF EXISTS TOKENS;');
	//await pool.query('DROP TABLE IF EXISTS USERS;');
	await pool.query(
		`CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			login VARCHAR(100),
			password VARCHAR(200),
			name VARCHAR(100),
			lastname VARCHAR(100),
			sex VARCHAR(50),
			orientation VARCHAR(50),
			admin BOOLEAN default false
		);`
	);
	await pool.query(
		`CREATE TABLE IF NOT EXISTS tokens (
			id SERIAL,
			person INTEGER REFERENCES users (id) ON DELETE CASCADE,
			token VARCHAR(250),
			active BOOLEAN default true
		);`
	);
	app.listen(5000, () => { console.log('Start server') });
}

start();
