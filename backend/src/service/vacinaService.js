const pool = require("../model/connection")

const getVacineByPeriodService = async() => {
    const response = await pool.query(`SELECT va.*, pm.desc_meses,pa.desc_ano,r.tipo_rede FROM vacina va
                                        LEFT JOIN periodoaplicacaomes pm ON
                                        va.id_vacina = pm.id_vacina
                                        LEFT JOIN periodoaplicacaoano pa ON
                                        va.id_vacina = pa.id_vacina
                                        inner JOIN rede r ON
                                        r.id_rede = va.id_rede
                                        ORDER BY va.id_vacina
                                        `)
    return response
}

module.exports = {
    getVacineByPeriodService
}