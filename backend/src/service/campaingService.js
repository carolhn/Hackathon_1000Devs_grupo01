const pool = require("../model/connection")

const createCampaingService = async(descricao, data_inicio, data_fim) => {
        const {rows} = await pool.query("Select * from campanha")
        const campId = rows[rows.length -1].id_campanha
        const idCampaing = campId + 1
        
        const response = await pool.query(`INSERT INTO campanha (id_campanha, descricao,
                                           data_inicio, data_fim)
                                           VALUES
                                           ($1, $2,$3, $4) RETURNING *`,
                                            [idCampaing, descricao,data_inicio,data_fim])

            return response.rows
    }

const updateCampaingService = async(descricao, data_inicio, data_fim, id) => {
    const {rows} = await pool.query(`UPDATE campanha SET descricao = $1,
                                   data_inicio = $2, data_fim = $3
                                   WHERE
                                   id_campanha = $4 RETURNING *`, [descricao, data_inicio, data_fim, id])

    return rows
}

const createVaccineInCampaingService = async(id_campanha, id_vacina) => {
    const campaing = await pool.query(`SELECT * FROM campanha WHERE id_campanha = $1`, [id_campanha])
    const vaccine = await pool.query(`SELECT * FROM vacina WHERE id_vacina = $1`, [id_vacina])

    if(!campaing || !vaccine){
        throw new Error("O id da campanha ou da vacina estão incorretos!")
    }

    const {rows} = await pool.query(`INSERT INTO campanhavacina (id_campanha, id_vacina)
                                    VALUES ($1, $2) RETURNING *`, [id_campanha, id_vacina])

    return rows
}

const deleteVaccineInCampaingService = async(id) => {
    await pool.query("DELETE FROM campanhavacina WHERE id_vacina = $1", [id])

    return "Item deletado com sucesso"
}

const searchCampaingForDataService = async(date) => {
    const {rows} = await pool.query(`SELECT * FROM campanha 
                                     WHERE $1 BETWEEN data_inicio AND data_fim`, [date])

    return rows
}

const campaingByProtectionService = async(disease) => {
    disease = "%" + disease + "%"

    const {rows} = await pool.query(`select * from campanha c 
    inner join campanhavacina c2 on c.id_campanha = c2.id_campanha
    inner join vacina v on v.id_vacina = c2.id_vacina
    where v.doenca_protecao ilike $1;`, [disease])

    if(rows.length ===0){
        return {"Message": "Não existe campanha ativa com esta proteção"}
    }

    return rows
}

    module.exports = {
        createCampaingService,
        updateCampaingService,
        createVaccineInCampaingService,
        deleteVaccineInCampaingService,
        searchCampaingForDataService,
        campaingByProtectionService}