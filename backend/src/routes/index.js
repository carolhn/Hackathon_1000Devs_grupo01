const { Router } = require('express')
const { getAllVaccineAppliedController, createVaccineAppliedController } = require('../controller/vacinneAppliedController')
const { createPacientController, getAllPacientscontroller, updatePacientController, getPacientByIdController } = require('../controller/patient.controller')
const routes = Router()


routes.post("/paciente", createPacientController)
routes.patch("/paciente/:id", updatePacientController)
routes.get('/paciente/:id', getPacientByIdController)

routes.get('/vacinaAplicada/:id_paciente', getAllVaccineAppliedController)
routes.post('/vacinaAplicada', createVaccineAppliedController)

module.exports = routes
