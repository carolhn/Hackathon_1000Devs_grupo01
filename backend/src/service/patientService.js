const pool = require("../model/connection")

const createPacientService = async (id_paciente, nome, data_nascimento) => {
    const allPacients = await getAllPacientsServices()
    const idsPacients = []
    allPacients.forEach((pacient) => {
        idsPacients.push(pacient.id_paciente)
    })

    id_paciente = Math.max(...idsPacients) + 1
    const paciente = await pool.query(`INSERT INTO paciente (id_paciente,
        nome,
        data_nascimento)
        VALUES
            ($1, $2, $3) RETURNING *`, [id_paciente, nome, data_nascimento])

    return paciente
}


const getAllPacientsServices = async () => {
    const allPacients = await pool.query("SELECT * FROM paciente")
    return allPacients.rows
}

const updatePacientService = async (body, id) => {
    const { rows } = await pool.query(`UPDATE paciente SET name = $1,

    const { rows } = await pool.query(`UPDATE paciente SET nome = $1,
        data_nascimento = $2 
        WHERE
        id_paciente = $3 RETURNING *`, [body.nome, body.data_nascimento, id])

    return rows
}

const getPacientByIdServices = async (id_patient) => {
    const { rows } = await pool.query("SELECT * FROM paciente WHERE id_paciente = $1", [id_patient])
    return rows
}

module.exports = {
    createPacientService,
    getAllPacientsServices,
    updatePacientService,
    getPacientByIdServices
}