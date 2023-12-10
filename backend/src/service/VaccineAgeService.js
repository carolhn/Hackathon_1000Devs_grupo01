const pool = require('../model/connection')

const protectionVaccineUntilYearService = async (idadeAno) => {

    const vaccineAgeProtectionAge = await pool.query(`select va.id_vacina, vacina, sigla_vacina, 
    doenca_protecao,dose, id_rede, qtd_ano_inicial, qtd_ano_final, desc_ano from vacina va join 
    periodoaplicacaoano pa on va.id_vacina = pa.id_vacina where qtd_ano_final <= $1`, [idadeAno])

    return vaccineAgeProtectionAge.rows
}

const protectionVaccineExactYearService = async (idadeAno) => {

    const vaccineAgeProtectionAge = await pool.query(`select va.id_vacina, vacina, sigla_vacina, 
    doenca_protecao,dose, id_rede, qtd_ano_inicial, qtd_ano_final, desc_ano from vacina va join 
    periodoaplicacaoano pa on va.id_vacina = pa.id_vacina where qtd_ano_final = $1`, [idadeAno])

    return vaccineAgeProtectionAge.rows

}


const protectionVaccineUntilMonthService = async (idadeMes) => {

    const vaccineAgeProtectionMonth = await pool.query(`select va.id_vacina, vacina, sigla_vacina, 
    doenca_protecao,dose, id_rede, qtd_meses_inicial, qtd_meses_final, desc_meses from vacina va join 
    periodoaplicacaomes pm on va.id_vacina = pm.id_vacina where qtd_meses_final <= $1`, [idadeMes])

    return vaccineAgeProtectionMonth.rows
}


const protectionVaccineExactMonthService = async (idadeMes) => {

    const vaccineAgeProtectionMonth = await pool.query(`select va.id_vacina, vacina, sigla_vacina, 
    doenca_protecao,dose, id_rede, qtd_meses_inicial, qtd_meses_final, desc_meses from vacina va join 
    periodoaplicacaomes pm on va.id_vacina = pm.id_vacina where qtd_meses_final = $1`, [idadeMes])

    return vaccineAgeProtectionMonth.rows

}



module.exports = {
    protectionVaccineUntilYearService,
    protectionVaccineExactYearService,
    protectionVaccineUntilMonthService,
    protectionVaccineExactMonthService
}