const { Router } = require('express')
const { createPacientController, updatePacientController, getPacientByIdController,
        getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController,
        getVacineByPeriodController, getVaccineProtectionController, getProtectionVaccineUntilYearControler,
        getProtectionVaccineExactYearControler, getProtectionVaccineUntilMonthControler,
        getProtectionVaccineExactMonthControler, createCampaingController, updateCampaingController,
        createVaccineInCampaingController, deleteVaccineInCampaingController, searchCampaingForDataController, 
        campaingByProtectionController,getPatientVacinneControler, getPatientMissingVacinneControler, createVaccineController} = require('../controller')



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



routes.post('/campanha', createCampaingController)
routes.patch('/campanha/:id', updateCampaingController)
routes.post('/campanha/vacina', createVaccineInCampaingController)
routes.delete('/campanha/vacina/:id', deleteVaccineInCampaingController)
routes.get('/campanhadate/:date', searchCampaingForDataController)
routes.get('/campanhaprotecao/:disease', campaingByProtectionController)

routes.post("/vacina", createVaccineController)


module.exports = routes
