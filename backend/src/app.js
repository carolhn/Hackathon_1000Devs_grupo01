const express = require('express')
const routes = require('./routes')const routes = require('./routes/index')
const app = express()

app.use(express.json())

app.use(routes)

app.use(routes)

// app.get('/', (_request, response) => {
//     response.send()
// })

// app.get('/', (_request, response) => {
//     response.send("Olá mundo")
// })



module.exports = app