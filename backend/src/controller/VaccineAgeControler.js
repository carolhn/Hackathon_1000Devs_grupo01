const pool = require('../model/connection')
const { protectionVaccineExactMonthService, protectionVaccineUntilMonthService, protectionVaccineExactYearService } = require('../service/VaccineAgeService')

const protectionVaccineUntilYearControler = async (req, res) => {
    const { idadeAno } = req.body

    const vaccineAgeProtectionAge = await protectionVaccineUntilMonthService(idadeAno)

    return res.json(vaccineAgeProtectionAge)

}

const protectionVaccineExactYearControler = async (req, res) => {
    const { idadeAno } = req.body

    const vaccineAgeProtectionAge = await protectionVaccineExactYearService(idadeAno)

    return res.json(vaccineAgeProtectionAge)

}


const protectionVaccineUntilMonthControler = async (req, res) => {
    const { idadeMes } = req.body

    const vaccineAgeProtectionMonth = await protectionVaccineUntilMonthService(idadeMes)

    return res.json(vaccineAgeProtectionMonth)
}


const protectionVaccineExactMonthControler = async (req, res) => {
    const { idadeMes } = req.body

    const vaccineAgeProtectionMonth = await protectionVaccineExactMonthService(idadeMes)

    return res.json(vaccineAgeProtectionMonth)

}






module.exports = {
    protectionVaccineUntilYearControler,
    protectionVaccineExactYearControler,
    protectionVaccineUntilMonthControler,
    protectionVaccineExactMonthControler
}