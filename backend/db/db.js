module.exports.init = async function (pool) {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      login VARCHAR(100),
      email VARCHAR(100),
      password VARCHAR(200),
      name VARCHAR(100),
      lastname VARCHAR(100),
      sex VARCHAR(50),
      orientation VARCHAR(50),
      admin BOOLEAN default false
    );`,
  );
  await pool.query(
    `CREATE TABLE IF NOT EXISTS tokens (
      id SERIAL PRIMARY KEY,
      person INTEGER REFERENCES users (id) ON DELETE CASCADE,
      token VARCHAR(250),
      active BOOLEAN default true
    );`,
  );
};

module.exports.clear = async function (pool) {
  await pool.query('DROP TABLE IF EXISTS tokens');
  await pool.query('DROP TABLE IF EXISTS users');
};

module.exports.getUserByLogin = async function (pool, login) {
  const { rows } = await pool.query('SELECT * FROM users WHERE login = $1', [login]);
  if (rows.length == 0) return null;
  return rows[0];
};

module.exports.getUserByEmail = async function (pool, email) {
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  if (rows.length == 0) return null;
  return rows[0];
};

module.exports.getUserByLoginPassword = async function (pool, login, password) {
  const { rows } = await pool.query('SELECT * FROM users WHERE login = $1 AND password = $2', [login, password]);
  if (rows.length == 0) return null;
  return await rows[0];
}

module.exports.getUserByToken = async function (pool, token) {
  const { rows } = await pool.query('SELECT * FROM tokens WHERE token = $1', [token]);
  if (rows.length == 0) return null;
  const user = await pool.query('SELECT * FROM users WHERE id = $1', [rows[0].person]);
  return await user.rows[0];
}

module.exports.getOrCreateUserToken = async function (pool, id) {
  const { rows } = await pool.query('SELECT * FROM tokens WHERE person = $1 AND active = TRUE', [id]);
  if (rows.length === 0) {
    const token = await generateToken(pool);
    await pool.query('INSERT INTO tokens (person, token) VALUES ($1, $2)', [id, token]);
    return token;
  }
  else return await rows[0].token;
}

async function generateToken(pool) {
  const tokens = await pool.query('SELECT * FROM tokens');
  while (1) {
    let token = randomString(20);
    if (!tokens.rows.find(item => item.token === token)) return token;
  }
}

function randomString(len) {
  chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
    var str = '';
    for (var i = 0; i < len; i++) {
      var pos = Math.floor(Math.random() * chrs.length);
      str += chrs.substring(pos,pos+1);
    }
    return str;
};
