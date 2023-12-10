const { getPatientVacinneService, getPatientMissingVacinneService } = require('../service/searchVaccinePatientService')



const getPatientVacinneControler = async (req, res) => {
    const { id_paciente } = req.params

    const vacinnePatient = await getPatientVacinneService(id_paciente)

    return res.json(vacinnePatient)
}


const getPatientMissingVacinneControler = async (req, res) => {
    const { id_paciente } = req.params

    const vacinnePatient = await (getPatientMissingVacinneService(id_paciente))

    return res.json(vacinnePatient)

}





module.exports = { getPatientVacinneControler, getPatientMissingVacinneControler }