const { Pool } = require('pg');
const util = require('util');

// PostgreSQLデータベースの設定
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'postgres',
    port: 5432,
  });
pool.query = util.promisify(pool.query);
const selectUser = 'SELECT * FROM users WHERE user_name = $1 AND password = $2';


module.exports.pool = pool;
module.exports.selectUser = selectUser;