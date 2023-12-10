const { Router } = require('express')
const { getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController } = require('../controller/vacinneAppliedController')
const { createPacientController, updatePacientController, getPacientByIdController } = require('../controller/patient.controller')
const { getVacineByPeriodController, getVaccineProtectionController } = require('../controller/vacina.controller')
const { protectionVaccineUntilYearControler, protectionVaccineExactYearControler, protectionVaccineUntilMonthControler, protectionVaccineExactMonthControler } = require('../controller/VaccineAgeControler')

const routes = Router()


routes.post("/paciente", createPacientController)
routes.patch("/paciente/:id", updatePacientController)
routes.get('/paciente/:id', getPacientByIdController)

routes.get('/vacinaAplicada/:id_paciente', getAllVaccineAppliedController)
routes.post('/vacinaAplicada', createVaccineAppliedController)
routes.delete('/vacinaAplicada', deleteVaccineApliedController)

routes.get('/vacinasporperiodo',getVacineByPeriodController)
routes.get('/vacinasporprotecao/:doenca',getVaccineProtectionController)
routes.get('/vacinasporperiodo', getVacineByPeriodController)

routes.get('/consultaVacinaIdade', protectionVaccineUntilYearControler)
routes.get('/consultaVacinaIdadeExata', protectionVaccineExactYearControler)
routes.get('/consultaVacinaMes', protectionVaccineUntilMonthControler)
routes.get('/consultaVacinaMesExato', protectionVaccineExactMonthControler)


module.exports = routes
