const { createPacientService, updatePacientService, getPacientByIdServices, getAllPacientsServices } = require("../service/patientService")

const createPacientController = async (req, res) => {
    const { id_paciente, name, data_nascimento } = req.body
    const newPaciente = await createPacientService(id_paciente, name, data_nascimento)

    res.status(201).json(newPaciente.rows)
}

const getAllPacientscontroller = async (req, res) => {
    const allPacients = await getAllPacientsServices()
    res.status(200).json(allPacients)
}

const updatePacientController = async (req, res) => {
    const paciente = req.body
    const id_pacient = req.params.id

    const newPaciente = await updatePacientService(paciente, id_pacient)

    res.status(200).json(newPaciente)
}

const getPacientByIdController = async (req, res) => {
    const idPatient = req.params.id
    const pacient = await getPacientByIdServices(idPatient)
    res.status(200).json(pacient)
}

module.exports = {
    createPacientController,
    getAllPacientscontroller,
    updatePacientController,
    getPacientByIdController
}