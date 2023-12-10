const { Router } = require('express')
const { getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController } = require('../controller/vacinneAppliedController')
const { createPacientController, updatePacientController, getPacientByIdController } = require('../controller/patient.controller')
const { getVacineByPeriodController } = require('../controller/vacina.controller')
const routes = Router()


routes.post("/paciente", createPacientController)
routes.patch("/paciente/:id", updatePacientController)
routes.get('/paciente/:id', getPacientByIdController)

routes.get('/vacinaAplicada/:id_paciente', getAllVaccineAppliedController)
routes.post('/vacinaAplicada', createVaccineAppliedController)
routes.delete('/vacinaAplicada', deleteVaccineApliedController)

routes.get('/vacinasporperiodo',getVacineByPeriodController)

module.exports = routes
