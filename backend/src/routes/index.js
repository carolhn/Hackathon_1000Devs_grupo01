const { Router } = require('express')
const {createPacientController, getAllPacientscontroller, updatePacientController, getPacientByIdController} = require('../controller/patient.controller')
const routes = Router()

//Get all pacients
routes.get('/paciente',getAllPacientscontroller)
//CREATE Patient
routes.post("/paciente",createPacientController) 
//Update Patient
routes.patch("/paciente/:id",updatePacientController) 
//Get patient by id
routes.get('/paciente/:id',getPacientByIdController)

module.exports = routes
