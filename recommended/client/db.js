const Pool = require("pg").Pool;

const pool = new Pool({
    user:'wesleycoleman',
    password:'',
    database:'youtube',
    host:'localhost',
    port:5432
})

module.exports = pool;