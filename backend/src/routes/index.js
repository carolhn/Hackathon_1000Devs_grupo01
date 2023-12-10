const { Router } = require('express')
const { createPacientController, updatePacientController, getPacientByIdController,
        getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController,
        getVacineByPeriodController, getVaccineProtectionController, protectionVaccineUntilYearControler,
        protectionVaccineExactYearControler, protectionVaccineUntilMonthControler, protectionVaccineExactMonthControler, createCampaingController, updateCampaingController, createVaccineInCampaingController, deleteVaccineInCampaingController, searchCampaingForDataController, campaingByProtectionController } = require('../controller')


const routes = Router()


routes.post("/paciente", createPacientController)
routes.patch("/paciente/:id", updatePacientController)
routes.get('/paciente/:id', getPacientByIdController)

routes.get('/vacinaAplicada/:id_paciente', getAllVaccineAppliedController)
routes.post('/vacinaAplicada', createVaccineAppliedController)
routes.delete('/vacinaAplicada', deleteVaccineApliedController)

routes.get('/vacinasporperiodo',getVacineByPeriodController)
routes.get('/vacinasporprotecao/:doenca',getVaccineProtectionController)

routes.get('/consultaVacinaIdade', protectionVaccineUntilYearControler)
routes.get('/consultaVacinaIdadeExata', protectionVaccineExactYearControler)
routes.get('/consultaVacinaMes', protectionVaccineUntilMonthControler)
routes.get('/consultaVacinaMesExato', protectionVaccineExactMonthControler)

routes.post('/campanha', createCampaingController)
routes.patch('/campanha/:id', updateCampaingController)
routes.post('/campanha/vacina', createVaccineInCampaingController)
routes.delete('/campanha/vacina/:id', deleteVaccineInCampaingController)
routes.get('/campanhadate/:date', searchCampaingForDataController)
routes.get('/campanhaprotecao/:disease', campaingByProtectionController)


module.exports = routes
