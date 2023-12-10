const { createVaccineService } = require("../service/createVaccineService")

const createVaccineController = async(req, res) => {
    const {vacina, sigla_vacina, doenca_protecao, dose, id_rede} = req.body

    const newVacinne = await createVaccineService(vacina, sigla_vacina, doenca_protecao, dose, id_rede)

    return res.status(201).json(newVacinne)
}

module.exports = {createVaccineController}