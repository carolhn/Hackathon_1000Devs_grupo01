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

    module.exports = {createCampaingService, updateCampaingService}