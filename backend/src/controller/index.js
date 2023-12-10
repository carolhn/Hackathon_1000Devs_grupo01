
const { getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController } = require('../controller/vacinneAppliedController')
const { createPacientController, updatePacientController, getPacientByIdController } = require('../controller/patient.controller')
const { getVacineByPeriodController } = require('../controller/vaccineByPeriod.controller')
const { getProtectionVaccineUntilYearControler, getProtectionVaccineExactYearControler, getProtectionVaccineUntilMonthControler, getProtectionVaccineExactMonthControler } = require('../controller/VaccineAgeControler')
const { getVaccineProtectionController } = require('../controller/vaccineByProtectionController')
const { getPatientVacinneControler, getPatientMissingVacinneControler } = require('../controller/searchVaccinePatientController')

module.exports = {
    createPacientController,
    updatePacientController,
    getPacientByIdController,
    getProtectionVaccineUntilYearControler,
    getProtectionVaccineExactYearControler,
    getProtectionVaccineUntilMonthControler,
    getProtectionVaccineExactMonthControler,
    getVacineByPeriodController,
    getVaccineProtectionController,
    getAllVaccineAppliedController,
    createVaccineAppliedController,
    deleteVaccineApliedController,
    getPatientVacinneControler,
    getPatientMissingVacinneControler
}