const express = require('express');
const app = express();
const pool = require('./db');
const cors = require("cors")
const PORT = 3203;
const morgan = require('morgan')
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(morgan('combined'))

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
})

app.get('/api/recommended', async(req, res) => {
    try {
        const recommendedVid = await pool.query('SELECT * FROM recommended')
        res.json(recommendedVid.rows)
    } catch (err) {
        console.error(err.message)
        }
})


app.listen(PORT, () => {
    console.log(`on ${PORT}`)
})