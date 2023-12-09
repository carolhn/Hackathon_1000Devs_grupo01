const { Router } = require('express')
const pool = require('../model/connection')


const routes = Router()

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' })
})

routes.get('/vacina', async (req, res) => {
    const vacinacao = await pool.query('select * from vacina')
    return res.send(vacinacao)
})

module.exports = routes
