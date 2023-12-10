const { createCampaingService, updateCampaingService } = require("../service/campaingService")


const createCampaingController = async (req, res) => {
    const {descricao, data_inicio, data_fim} = req.body
    const newCampaing = await createCampaingService(descricao, data_inicio, data_fim)

    return res.status(201).json(newCampaing)
}

const updateCampaingController = async(req, res) => {
    const {descricao, data_inicio, data_fim} = req.body
    const id = req.params.id

    const updatedCampaing = await updateCampaingService(descricao, data_inicio, data_fim, id)

    return res.status(200).json(updatedCampaing)
}

module.exports = {createCampaingController, updateCampaingController}