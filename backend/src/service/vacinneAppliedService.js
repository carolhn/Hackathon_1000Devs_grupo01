const pool = require('../model/connection')

const getAllVaccineAppliedService = async (id_paciente) => {

    const findVacina = await pool.query(`select * from vacinaaplicada where (id_paciente = $1)`,
        [id_paciente])

    if (findVacina.rows < 1) {

        throw new Error('sem informações de vacinas para o usuario informado')
    }

    return findVacina.rows
}


const createVaccineAppliedService = async (id_paciente, id_vacina, data_aplicacao) => {

    let data = data_aplicacao

    const findVacinaId_paciente = await pool.query(`select * from paciente where (id_paciente= $1)`,
        [id_paciente])

    const findVacinaId_vacina = await pool.query(`select * from vacina where (id_vacina= $1)`,
        [id_vacina])

    if (findVacinaId_paciente.rows < 1) {

        throw new Error('sem informações de vacinas para o usuario informado')
    }

    if (findVacinaId_vacina.rows < 1) {

        throw new Error('não existe a vacina informada no banco de dados')
    }

    const createappliedVAccine = await pool.query(
        `insert into vacinaaplicada (id_paciente, id_vacina, data_aplicacao) values($1,$2,$3)
        returning *`, [id_paciente, id_vacina, data])

    return createappliedVAccine.rows
}



const deleteVaccineApliedService = async (id_vacina) => {

    const findVacina = await pool.query(`select * from vacina where (id_vacina = $1)`, [id_vacina])

    if (findVacina.rowCount === 0) {
        throw new error('não existe vacina para o id informado')
    }

    const vacinaDeleted = await pool.query(`delete vacina where('id_vacina' = $1)`, [id_vacina])

    return ({ mensagem: "vacina excluida com sucesso" })

}




module.exports = {
    createVaccineAppliedService,
    getAllVaccineAppliedService,
    deleteVaccineApliedService
}