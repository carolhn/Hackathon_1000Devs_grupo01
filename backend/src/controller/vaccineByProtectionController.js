const { getVaccineProtectionService } = require("../service/vaccineProtectionservice")

const getVaccineProtectionController = async(req, res) => {
    const disease = req.params.doenca
    const response = await getVaccineProtectionService(disease)

    return res.status(200).json(response.rows)

}

module.exports = {getVaccineProtectionController}