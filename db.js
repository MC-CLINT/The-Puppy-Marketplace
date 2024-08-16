// db.js
const { Pool } = require('pg');

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PuppyMarketPlace',
  password: '@chim0t@',
  port: 5000,
});

module.exports = db;

//psql -U postgres PuppyMarketPlace