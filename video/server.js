const express = require('express')
const PORT = 3201
const pool = require('./db_connection.js')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
// our server container
const app = express();

// middleware 
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'./client/build')))




app.get('/db/:videoKey',async(req,res)=>{
    try {
        videoKey = req.params.videoKey
        const allData = await pool.query(`SELECT * FROM videos WHERE video_key=${videoKey}`)
        res.send(allData.rows[0])
    } catch (err) {
    console.error(err.message)      
    }
})
app.get('/index',(req,res)=>{
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    
})
// to stream the video requested
app.get('/video/:videoName', (req, res)=> {
    const videoName = req.params.videoName
    const path = `./videos/${videoName}.mp4`
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
    });


  // to remove the last stream that was running

  
  app.get('/removeVideoSteam/:videoName',(req,res)=>{
    const videoName = req.params.videoName
    const path = `./videos/${videoName}.mp4`
    const readable = fs.createReadStream(path)
    readable.unpipe(res)
    res.send('disconnected')
    })
// causes our server to listen for incoming reuqests to this port
app.listen(PORT, ()=>{
    console.log(`LISTINING ON PORT ${PORT}`)
}); 