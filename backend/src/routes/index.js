const { Router } = require('express')
const { getAllVaccineAppliedController, createVaccineAppliedController } = require('../controller/vacinneAppliedController')

const routes = Router()

routes.get('/vacinaAplicada/:id_paciente', getAllVaccineAppliedController)
routes.post('/vacinaAplicada', createVaccineAppliedController)

module.exports = routes
