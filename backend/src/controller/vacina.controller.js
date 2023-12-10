const {getVacineByPeriodService, getVaccineProtectionService} = require("../service/vacinaService")

const getVacineByPeriodController = async(req, res) => {
    const response = await getVacineByPeriodService()

    return res.status(200).json(response.rows)

}

const getVaccineProtectionController = async(req, res) => {
    const disease = req.params.doenca
    const response = await getVaccineProtectionService(disease)

    return res.status(200).json(response.rows)

}

module.exports = {
    getVacineByPeriodController,
    getVaccineProtectionController
}