const {getVacineByPeriodService} = require("../service/vacinneByPeriodService")

const getVacineByPeriodController = async(req, res) => {
    const response = await getVacineByPeriodService()

    return res.status(200).json(response.rows)

}



module.exports = {
    getVacineByPeriodController
}