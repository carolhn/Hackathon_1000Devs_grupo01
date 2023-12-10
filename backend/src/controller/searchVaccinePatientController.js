const pool = require('../model/connection')


const patientVacinne = async (req, res) => {
    const { id_paciente } = req.params

    const vacinnePatiente = await pool.query(`
    select p.id_paciente, nome, data_nascimento, va.id_vacina, vacina, sigla_vacina,
    doenca_protecao, dose, id_rede, data_aplicacao from vacinaaplicada va inner join
     paciente p on va.id_paciente = p.id_paciente inner join vacina v on va.id_vacina
     = v.id_vacina where va.id_paciente = $1`, [id_paciente])

    return res.json(vacinnePatiente)
}




module.exports = { patientVacinne }