const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const PORT = 3202;

const { Pool } = require('pg');
const pool = new Pool({
    user: 'Kolby',
    password: '',
    host: 'localhost',
    port: '5432',
    database: 'youtube'
})

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use(express.static(path.resolve(__dirname,'./client/build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
});

// get 
app.get('/api/searchbar', async(req, res) => {
    try {
        const query = await pool.query('SELECT * FROM videos');
        res.status(200).json(query.rows)
    } catch (err) {
        console.log(err);
        res.status(500).end(err)
    }
})

app.get('/api/searchbar/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(id){
            const query = await pool.query(`SELECT * FROM videos WHERE id = ${id}`);
            console.log(query.rows)
            res.status(200).json(query.rows)
        }else{
            res.status(406).end('No Results')
        }
    } catch (err) {
        console.log(err);
        res.status(500).end(err)
    }
})

// post
app.post('/api/searchbar', async(req, res) => {
    try {
        const videoKey = parseInt(req.body.videoKey)
        if(videoKey){
            const addKey = await pool.query(`INSERT INTO videos (videoKey) VALUES (${videoKey})`)
            res.status(201).end('Video Key Added to Database.')
        }else{
            res.status(406).end('No Key Given')
        }
    } catch (err) {
        console.log(err);
        res.status(500).end(err)
    }
})

// put
app.put('/api/searchbar', async(req, res) => {
    try {
        const {videoKey, id} = req.body
        if(videoKey && id){
            const changeKey = await pool.query(`UPDATE videos SET videoKey = ${videoKey} WHERE id = ${id}`)
            res.status(200).end('Video Key Updated')
        }else{
            res.status(406).end('No Key/ID Given')
        }
    } catch (err) {
        console.log(err);
        res.status(500).end(err)
    }
})

//delete
app.delete('/api/searchbar', async(req, res) => {
    try {
        const id = parseInt(req.body.id)
        if(id){
            const deleteRecord = pool.query(`DELETE FROM videos WHERE id = ${id}`)
        }else{
            res.status(406).end('No Key Given')
        }
    } catch (err) {
        console.log(err);
        res.status(500).end(err)
    }
})

app.listen(PORT, () => {
    console.log(`Now Listening on Port: ${PORT}`)
})