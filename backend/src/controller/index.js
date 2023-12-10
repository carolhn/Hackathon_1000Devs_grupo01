
const { getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController } = require('../controller/vacinneAppliedController')
const { createPacientController, updatePacientController, getPacientByIdController } = require('../controller/patient.controller')
const { getVacineByPeriodController} = require('../controller/vaccineByPeriod.controller')
const { protectionVaccineUntilYearControler, protectionVaccineExactYearControler, protectionVaccineUntilMonthControler, protectionVaccineExactMonthControler } = require('../controller/VaccineAgeControler')
const { getVaccineProtectionController } = require('../controller/vaccineByProtectionController')
const { createCampaingController, updateCampaingController,
        createVaccineInCampaingController,
        deleteVaccineInCampaingController,searchCampaingForDataController,
        campaingByProtectionController} = require("../controller/campaingController")


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
    deleteVaccineApliedController,
    createCampaingController,
    updateCampaingController,
    createVaccineInCampaingController,
    deleteVaccineInCampaingController,
    searchCampaingForDataController,
    campaingByProtectionController
}