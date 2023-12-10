const { createVaccineService, updateVaccineService, createVaccineApplicationYearService,
    deleteVaccineApplicationYearService, createVaccineApplicationMonthService,
    deleteVaccineApplicationmonthService } = require("../service/CrudVaccineService")
const pool = require('../model/connection')

const createVaccineController = async (req, res) => {
    const { vacina, sigla_vacina, doenca_protecao, dose, id_rede } = req.body

    const newVacinne = await createVaccineService(vacina, sigla_vacina, doenca_protecao, dose, id_rede)

    return res.status(201).json(newVacinne)
}


const updateVaccineController = async (req, res) => {
    const { id_vacina } = req.params
    const { vacina, sigla_vacina, doenca_protecao, dose, id_rede } = req.body


    const updateVaccine = await updateVaccineService(id_vacina, vacina, sigla_vacina,
        doenca_protecao, dose, id_rede)

    return res.json(updateVaccine)

}


const createVaccineApplicationYearController = async (req, res) => {
    const { id_vacina, qtd_ano_inicial, qtd_ano_final } = req.body



    const VacineApplicationYear = await createVaccineApplicationYearService(id_vacina, qtd_ano_inicial, qtd_ano_final)

    return res.status(201).json(VacineApplicationYear)
}


const deleteVaccineApplicationYearController = async (req, res) => {
    const { id } = req.params


    const vaccineDeleted = await deleteVaccineApplicationYearService(id)

    return res.json(vaccineDeleted)
}


const createVaccineApplicationMonthController = async (req, res) => {
    const { id_vacina, qtd_meses_inicial, qtd_meses_final } = req.body

    const VacineApplicationMonth = await createVaccineApplicationMonthService(id_vacina,
        qtd_meses_inicial, qtd_meses_final)

    return res.status(201).json(VacineApplicationMonth)
}


const deleteVaccineApplicationmonthController = async (req, res) => {
    const { id } = req.params

    const vaccineDeleted = await deleteVaccineApplicationmonthService(id)

    return res.json(vaccineDeleted)
}


module.exports = {
    createVaccineController,
    updateVaccineController,
    createVaccineApplicationYearController,
    deleteVaccineApplicationYearController,
    createVaccineApplicationMonthController,
    deleteVaccineApplicationmonthController
}

