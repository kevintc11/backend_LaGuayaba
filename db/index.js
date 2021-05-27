const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'laguayaba',
    password: 'K.tc1218',
    port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}