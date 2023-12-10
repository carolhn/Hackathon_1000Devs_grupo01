
const { getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController } = require('../controller/vacinneAppliedController')
const { createPacientController, updatePacientController, getPacientByIdController } = require('../controller/patient.controller')
const { getVacineByPeriodController } = require('../controller/vaccineByPeriod.controller')
const { getProtectionVaccineUntilYearControler, getProtectionVaccineExactYearControler, getProtectionVaccineUntilMonthControler, getProtectionVaccineExactMonthControler } = require('../controller/VaccineAgeControler')
const { getVaccineProtectionController } = require('../controller/vaccineByProtectionController')
const { createCampaingController, updateCampaingController,
        createVaccineInCampaingController,
        deleteVaccineInCampaingController,searchCampaingForDataController,
        campaingByProtectionController} = require("../controller/campaingController")
const { getPatientVacinneControler, getPatientMissingVacinneControler } = require('../controller/searchVaccinePatientController')
const {createVaccineController} = require("../controller/createVaccineController")

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
    createCampaingController,
    updateCampaingController,
    createVaccineInCampaingController,
    deleteVaccineInCampaingController,
    searchCampaingForDataController,
    campaingByProtectionController,
    getPatientVacinneControler,
    getPatientMissingVacinneControler,
    createVaccineController
}