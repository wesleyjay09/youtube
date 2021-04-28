const Pool = require("pg").Pool;

const pool = new Pool({
    user:'Kolby',
    password:'',
    database:'youtube',
    host:'localhost',
    port:5432
})

module.exports = pool;