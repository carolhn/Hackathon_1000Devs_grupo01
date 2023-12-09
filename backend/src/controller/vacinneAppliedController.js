const pool = require('../service/index')
const { getAllVaccineAppliedService, createVaccineAppliedService } = require('../service/vacinneAppliedService')


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
    const { id_vacina } = req.body

    const findVacina = await pool.query(`select * from vacina where (id_vacina = $1)`, [id_vacina])

    if (findVacina.rowCount === 0) {
        throw new error('não existe vacina para o id informado')
    }

    const vacinaDeleted = await pool.query(`delete vacina where('id_vacina' = $1)`, [id_vacina])

    return res.json({ mensagem: "vacina excluida com sucesso" })

}


module.exports = {
    getAllVaccineAppliedController,
    createVaccineAppliedController,
    deleteVaccineApliedController
}