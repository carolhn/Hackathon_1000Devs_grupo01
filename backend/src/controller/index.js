
const { getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController } = require('../controller/vacinneAppliedController')
const { createPacientController, updatePacientController, getPacientByIdController } = require('../controller/patient.controller')
const { getVacineByPeriodController} = require('../controller/vaccineByPeriod.controller')
const { protectionVaccineUntilYearControler, protectionVaccineExactYearControler, protectionVaccineUntilMonthControler, protectionVaccineExactMonthControler } = require('../controller/VaccineAgeControler')
const { getVaccineProtectionController } = require('../controller/vaccineByProtectionController')

module.exports = {
    createPacientController,
    updatePacientController,
    getPacientByIdController,
    protectionVaccineUntilYearControler,
    protectionVaccineExactYearControler,
    protectionVaccineUntilMonthControler,
    protectionVaccineExactMonthControler,
    getVacineByPeriodController,
    getVaccineProtectionController,
    getAllVaccineAppliedController,
    createVaccineAppliedController,
    deleteVaccineApliedController
}