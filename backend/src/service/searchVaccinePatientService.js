const pool = require('../model/connection')
const { getProtectionVaccineUntilYearService } = require('./VaccineAgeService')

const getPatientVacinneService = async (id_paciente) => {

    const vacinnePatient = await pool.query(`
    select p.id_paciente, nome, data_nascimento, va.id_vacina, vacina, sigla_vacina,
    doenca_protecao, dose, id_rede, data_aplicacao from vacinaaplicada va inner join
     paciente p on va.id_paciente = p.id_paciente inner join vacina v on va.id_vacina
     = v.id_vacina where va.id_paciente = $1`, [id_paciente])

    return vacinnePatient.rows
}

const getPatientMissingVacinneService = async (id_paciente) => {
    let vacinnePatient = []

    const findPatient = await getPatientVacinneService(id_paciente)

    if (findPatient.length < 1) {
        throw new Error('paciente informado não existe')
    }

    if (findPatient.length < 1) {

        const findPacient2 = await pool.query(`
        select * from paciente where id_paciente = $1`, [id_paciente])

        const patientYear2 = new Date(findPacient2.rows[0].data_nascimento)
        const age2 = (new Date()).getFullYear() - patientYear2.getFullYear()
        const protectionVaccineUntilYear2 = await getProtectionVaccineUntilYearService(age2)

        return protectionVaccineUntilYear2
    }

    const patientYear = new Date(findPatient[0].data_nascimento)

    const age = (new Date()).getFullYear() - patientYear.getFullYear()

    const protectionVaccineUntilYear = await getProtectionVaccineUntilYearService(age)

    for (let i of protectionVaccineUntilYear) {
        const missigVacinne = findPatient.findIndex((elemento) => {
            return elemento.id_vacina === i.id_vacina
        })

        if (missigVacinne < 0) {
            vacinnePatient.push(i)
        }
    }
    return vacinnePatient

}



module.exports = { getPatientVacinneService, getPatientMissingVacinneService }