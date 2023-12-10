const pool = require("../model/connection")

const createVaccineService = async(vacina, sigla_vacina, doenca_protecao, dose, id_rede) => {
    const {rows} = await pool.query("Select * from vacina")
    const vacinneId = rows[rows.length -1].id_vacina
    const idVacinne = vacinneId + 1
    
    const response = await pool.query(`INSERT INTO vacina (id_vacina, vacina,
        sigla_vacina, doenca_protecao, dose, id_rede)
                                       VALUES
                                       ($1, $2,$3, $4, $5, $6) RETURNING *`,
                                        [idVacinne, vacina, sigla_vacina, doenca_protecao, dose, id_rede])

        return response.rows
}

module.exports = {createVaccineService}