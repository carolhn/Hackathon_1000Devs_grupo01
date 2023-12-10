const pool = require("../model/connection")

const createVaccineService = async (vacina, sigla_vacina, doenca_protecao, dose, id_rede) => {
    const { rows } = await pool.query("Select * from vacina")
    const vacinneId = rows[rows.length - 1].id_vacina
    const idVacinne = vacinneId + 1

    const response = await pool.query(`INSERT INTO vacina (id_vacina, vacina,
        sigla_vacina, doenca_protecao, dose, id_rede) VALUES ($1, $2,$3, $4, $5, $6) 
        RETURNING *`, [idVacinne, vacina, sigla_vacina, doenca_protecao, dose, id_rede])

    return response.rows
}

const updateVaccineService = async (id_vacina, vacina, sigla_vacina, doenca_protecao, dose,
    id_rede) => {

    const findVacinne = await pool.query('select * from vacina where id_vacina = $1',
        [id_vacina])

    if (findVacinne.rowCount < 1) {
        throw new Error(`vacina informada não existente ou algum parâmetro para atualização
        deve ser informado`)
    }

    const updateVaccine = await pool.query(`update vacina set vacina = $1, sigla_vacina = $2,
     doenca_protecao = $3, dose = $4, id_rede = $5 WHERE id_vacina = $6 returning *`, [vacina,
        sigla_vacina, doenca_protecao, dose, id_rede, id_vacina])

    return updateVaccine.rows

}


const createVaccineApplicationYearService = async (id_vacina, qtd_ano_inicial, qtd_ano_final) => {

    const { rows } = await pool.query("Select * from periodoaplicacaoano")
    const id = rows[rows.length - 1].id + 1

    let desc_ano = qtd_ano_final - qtd_ano_inicial

    if (desc_ano > 0 && qtd_ano_inicial < 50) {
        desc_ano = `${qtd_ano_inicial} a ${qtd_ano_final} anos`
    } else if (desc_ano > 0 && qtd_ano_inicial >= 50) {
        desc_ano = `${qtd_ano_inicial} anos e mais`
    } else if (desc_ano === 0) {
        desc_ano = `${qtd_ano_inicial} anos`
    }

    const findVaccine = await pool.query("Select * from vacina where id_vacina = $1", [id_vacina])
    const findVaccineMes = await pool.query("Select * from periodoaplicacaomes where id_vacina = $1", [id_vacina])
    const findVaccineAno = await pool.query("Select * from periodoaplicacaoano where id_vacina = $1", [id_vacina])

    if (findVaccine.rowCount < 1) {
        throw new Error('a vacina de id informado não existe')
    } else if (findVaccineMes.rowCount > 0) {
        throw new Error('a vacina de id informado pertence a tabela periodoaplicacaomes ')

    } else if (findVaccineAno.rowCount > 0) {
        throw new Error('a vacina de id informado ja existe na tabela periodoaplicacaoano ')
    }

    const VacineApplicationYear = await pool.query(`INSERT INTO periodoaplicacaoano (id, 
        id_vacina, qtd_ano_inicial, qtd_ano_final, desc_ano ) VALUES ($1, $2,$3, $4, $5) 
        RETURNING *`, [id, id_vacina, qtd_ano_inicial, qtd_ano_final, desc_ano])

    return VacineApplicationYear.rows
}


const deleteVaccineApplicationYearService = async (id) => {

    const findVaccine = await pool.query(`Select * from periodoaplicacaoano where id = $1`,
        [id])

    if (findVaccine.rowCount < 1) {
        throw new Error('vacina com id informado não existe')
    }

    const vaccineDeleted = await pool.query(`delete from periodoaplicacaoano where id = $1`,
        [id])

    return { mensagem: 'vacina excluida da tabela periodoaplicacaoano com sucesso' }
}

const createVaccineApplicationMonthService = async (id_vacina, qtd_meses_inicial, qtd_meses_final) => {

    const { rows } = await pool.query("Select * from periodoaplicacaomes")
    const id = rows[rows.length - 1].id + 1

    let desc_meses

    if (qtd_meses_inicial > 0 && qtd_meses_final < 24 && qtd_meses_inicial !== qtd_meses_final) {
        desc_meses = `${qtd_meses_inicial} a ${qtd_meses_final} meses`
    } else if (qtd_meses_inicial === qtd_meses_final) {
        desc_meses = `${qtd_meses_inicial} meses`
    } else if (qtd_meses_inicial === 0 && qtd_meses_final === 0) {
        desc_meses = `Ao nascer`
    }

    const findVaccine = await pool.query("Select * from vacina where id_vacina = $1",
        [id_vacina])
    const findVaccineMes = await pool.query("Select * from periodoaplicacaomes where id_vacina = $1", [id_vacina])
    const findVaccineAno = await pool.query("Select * from periodoaplicacaoano where id_vacina = $1", [id_vacina])

    if (findVaccine.rowCount < 1) {
        throw new Error('a vacina de id informado não existe')
    } else if (findVaccineMes.rowCount > 0) {
        throw new Error('a vacina de id informado pertence a tabela periodoaplicacaomes ')

    } else if (findVaccineAno.rowCount > 0) {
        throw new Error('a vacina de id informado ja existe na tabela periodoaplicacaoano ')
    }

    if (qtd_meses_final >= 24) {
        throw new Error('a qtd_meses_final não pode ser maior que 24 messes')
    }

    const VacineApplicationMonth = await pool.query(`INSERT INTO periodoaplicacaomes (id, 
        id_vacina, qtd_meses_inicial, qtd_meses_final, desc_meses ) VALUES ($1, $2,$3, $4, $5) 
        RETURNING *`, [id, id_vacina, qtd_meses_inicial, qtd_meses_final, desc_meses])

    return VacineApplicationMonth.rows
}


const deleteVaccineApplicationmonthService = async (id) => {

    const findVaccine = await pool.query(`Select * from periodoaplicacaomes where id = $1`,
        [id])

    if (findVaccine.rowCount < 1) {
        throw new Error('vacina com id informado não existe')
    }

    const vaccineDeleted = await pool.query(`delete from periodoaplicacaomes where id = $1`,
        [id])

    return { mensagem: 'vacina excluida da tabela periodoaplicacaomes com sucesso' }
}







module.exports = {
    createVaccineService,
    updateVaccineService,
    createVaccineApplicationYearService,
    deleteVaccineApplicationYearService,
    createVaccineApplicationMonthService,
    deleteVaccineApplicationmonthService
}

