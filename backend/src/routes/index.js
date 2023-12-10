const { Router } = require('express')
const {createPacientController, getAllPacientscontroller, updatePacientController, getPacientByIdController} = require('../controller/patient.controller')
const { getVacineByPeriodController } = require('../controller/vacina.controller')
const routes = Router()
routes.get('/vacinasporperiodo',getVacineByPeriodController)
routes.get('/paciente',getAllPacientscontroller)

routes.post("/paciente",createPacientController) 

routes.patch("/paciente/:id",updatePacientController) 

routes.get('/paciente/:id',getPacientByIdController)


module.exports = routes
