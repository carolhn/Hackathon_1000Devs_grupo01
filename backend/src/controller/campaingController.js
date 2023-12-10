const { createCampaingService, updateCampaingService, createVaccineInCampaingService, deleteVaccineInCampaingService } = require("../service/campaingService")


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

const createVaccineInCampaingController = async(req, res) => {
    const {id_campanha, id_vacina} = req.body

    const newVacineCampaing = await createVaccineInCampaingService(id_campanha, id_vacina)

    return res.status(201).json(newVacineCampaing)
}

const deleteVaccineInCampaingController = async(req, res) => {
    const id = req.params.id
    await deleteVaccineInCampaingService(id)

    return res.status(204).send()
}

module.exports = {
    createCampaingController,
    updateCampaingController,
    createVaccineInCampaingController,
    deleteVaccineInCampaingController}