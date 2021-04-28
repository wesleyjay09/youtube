const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = 5001





const app = express()

app.use(cors())

app.use(express.static(path.join(`${__dirname}/public`)))

app.listen(PORT, () => {
    console.log(`Proxy server running on ${PORT}`)
})