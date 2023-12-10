const { Router } = require('express')
const { createPacientController, updatePacientController, getPacientByIdController,
    getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController,
    getVacineByPeriodController, getVaccineProtectionController, getProtectionVaccineUntilYearControler,
    getProtectionVaccineExactYearControler, getProtectionVaccineUntilMonthControler, getProtectionVaccineExactMonthControler,
    getPatientVacinneControler, getPatientMissingVacinneControler } = require('../controller')



const routes = Router()


routes.post("/paciente", createPacientController)
routes.patch("/paciente/:id", updatePacientController)
routes.get('/paciente/:id', getPacientByIdController)

routes.get('/vacinaAplicada/:id_paciente', getAllVaccineAppliedController)
routes.post('/vacinaAplicada', createVaccineAppliedController)
routes.delete('/vacinaAplicada', deleteVaccineApliedController)

routes.get('/vacinasporperiodo', getVacineByPeriodController)

routes.get('/vacinasporprotecao/:doenca', getVaccineProtectionController)

routes.get('/consultaVacinaIdade', getProtectionVaccineUntilYearControler)
routes.get('/consultaVacinaIdadeExata', getProtectionVaccineExactYearControler)
routes.get('/consultaVacinaMes', getProtectionVaccineUntilMonthControler)
routes.get('/consultaVacinaMesExato', getProtectionVaccineExactMonthControler)

routes.get('/vacinaPaciente/:id_paciente', getPatientVacinneControler)
routes.get('/vacinaFaltaPaciente/:id_paciente', getPatientMissingVacinneControler)




module.exports = routes
