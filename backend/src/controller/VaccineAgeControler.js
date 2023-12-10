const { getProtectionVaccineUntilYearService, getProtectionVaccineExactYearService, getProtectionVaccineUntilMonthService, getProtectionVaccineExactMonthService } = require('../service/VaccineAgeService')

const getProtectionVaccineUntilYearControler = async (req, res) => {
    const { idadeAno } = req.body

    const vaccineAgeProtectionAge = await getProtectionVaccineUntilYearService(idadeAno)

    return res.json(vaccineAgeProtectionAge)

}

const getProtectionVaccineExactYearControler = async (req, res) => {
    const { idadeAno } = req.body

    const vaccineAgeProtectionAge = await getProtectionVaccineExactYearService(idadeAno)

    return res.json(vaccineAgeProtectionAge)

}


const getProtectionVaccineUntilMonthControler = async (req, res) => {
    const { idadeMes } = req.body

    const vaccineAgeProtectionMonth = await getProtectionVaccineUntilMonthService(idadeMes)

    return res.json(vaccineAgeProtectionMonth)
}


const getProtectionVaccineExactMonthControler = async (req, res) => {
    const { idadeMes } = req.body

    const vaccineAgeProtectionMonth = await getProtectionVaccineExactMonthService(idadeMes)

    return res.json('sucesso na exclusão da aplicação da vacina')

}






module.exports = {
    getProtectionVaccineUntilYearControler,
    getProtectionVaccineExactYearControler,
    getProtectionVaccineUntilMonthControler,
    getProtectionVaccineExactMonthControler
}