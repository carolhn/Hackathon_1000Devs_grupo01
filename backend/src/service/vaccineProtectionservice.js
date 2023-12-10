const pool = require("../model/connection")

const getVaccineProtectionService = async(disease) => {
    disease = "%" + disease + "%"
    const response = await pool.query(`SELECT * FROM vacina
    WHERE doenca_protecao ILIKE $1`, [disease])

    return response
}

module.exports = {getVaccineProtectionService}