const { error } = require('console')
const pool = require('../model/connection')



const listVacina = async (req, res) => {

    const findVacina = await pool.query('select * from vacina')
    return res.json(findVacina.rows)
}


const createVacina = async (req, res) => {
    const { vacina, sigla_vacina, doenca_protecao } = req.body

    const findVacina = await pool.query('select * from vacina')
    const id_vacina = findVacina.rowCount + 1

    const vacinaCreate = await pool.query(`insert into (vacina) values (id_vacina,vacina,sigla_vacina,
    doenca_protecao) returning *`, [id_vacina, vacina, sigla_vacina, doenca_protecao])

    return res.status(201).json(vacinaCreate)
}


const deleteVacina = async (req, res) => {
    const { id_vacina } = req.body

    const findVacina = await pool.query(`select * from vacina where (${id_vacina})`)

    if (findVacina.rowCount === 0) {
        throw new error('não existe vacina para o id informado')
    }

    const vacinaDeleted = await pool.query(`delete from vacina where ($1)`, [id_vacina])

    return res.json({ mensagem: "vacina excluida com sucesso" })
}



module.exports = { createVacina, listVacina, deleteVacina }



