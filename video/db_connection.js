const Pool = require("pg").Pool;

const pool = new Pool({
    user: "Kolby",
    password: "",
    database: "notYoutube",
    host: "localhost",
    port: 5432
});

module.exports = pool;