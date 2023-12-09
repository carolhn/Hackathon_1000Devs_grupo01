const pool = require('../service/index')
const { getAllVaccineAppliedService, createVaccineAppliedService, deleteVaccineApliedService } = require('../service/vacinneAppliedService')


const getAllVaccineAppliedController = async (req, res) => {

    const { id_paciente } = req.params

    const vaccineApplied = await getAllVaccineAppliedService(id_paciente)

    return res.json(vaccineApplied)
}

const createVaccineAppliedController = async (req, res) => {
    const { id_paciente, id_vacina, data_aplicacao } = req.body

    const createAplicacaoVacina = await createVaccineAppliedService(id_paciente, id_vacina, data_aplicacao)

    return res.status(201).json(createAplicacaoVacina)
}

const deleteVaccineApliedController = async (req, res) => {
    const { id_vacina, id_paciente } = req.body

    const vacinaDeleted = await deleteVaccineApliedService(id_vacina, id_paciente)

    return res.json(vacinaDeleted)

}


module.exports = {
    getAllVaccineAppliedController,
    createVaccineAppliedController,
    deleteVaccineApliedController
}