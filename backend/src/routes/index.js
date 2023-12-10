const { Router } = require('express')
const { createPacientController, updatePacientController, getPacientByIdController,
        getAllVaccineAppliedController, createVaccineAppliedController, deleteVaccineApliedController,
        getVacineByPeriodController, getVaccineProtectionController, getProtectionVaccineUntilYearControler,
        getProtectionVaccineExactYearControler, getProtectionVaccineUntilMonthControler,
        getProtectionVaccineExactMonthControler, createCampaingController, updateCampaingController,
        createVaccineInCampaingController, deleteVaccineInCampaingController, searchCampaingForDataController, 
        campaingByProtectionController,getPatientVacinneControler, getPatientMissingVacinneControler, createVaccineController} = require('../controller')
const express = require("express")
const { getAllPacientscontroller } = require('../controller/patient.controller')
const router = express.Router()



const routes = Router()

routes.post("/paciente", createPacientController /*
    #swagger.tags = ['Rotas Paciente']
    #swagger.parameters['paciente'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          nome: {
            type: "string",          
          },
          data_nascimento: {
            type: "string"
          },
        },
        required: ["nome", "data_nascimento"]
      },
  } 
*/)
routes.patch("/paciente/:id", updatePacientController /*
#swagger.tags = ['Rotas Paciente']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      nome: {
        type: "string",          
      },
      data_nascimento: {
        type: "string"
      },
    },
  },
} 
*/)

routes.get("/paciente", getAllPacientscontroller)
routes.get('/paciente/:id', getPacientByIdController /*
#swagger.tags = ['Rotas Paciente']
#swagger.parameters['']
*/)

routes.get('/vacinaAplicada/:id_paciente', getAllVaccineAppliedController /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['']
*/)
routes.post('/vacinaAplicada', createVaccineAppliedController /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['Rotas paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      id_paciente: {
        type: "number",          
      },
      id_vacina: {
        type: "number"
      },
      data_aplicacao: {
        type: "string"
      },
    },
  },
} 
*/)
routes.delete('/vacinaAplicada', deleteVaccineApliedController /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      id_vacina: {
        type: "number",          
      },
    },
  },
} 
*/)

routes.get('/vacinasporperiodo', getVacineByPeriodController
//#swagger.tags = ['Rotas Vacinas']
)

routes.get('/vacinasporprotecao/:doenca', getVaccineProtectionController/*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['']
*/)

routes.get('/consultaVacinaIdade', getProtectionVaccineUntilYearControler /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      idadeAno: {
        type: "number",          
      },
    },
  },
} 
*/)
routes.get('/consultaVacinaIdadeExata', getProtectionVaccineExactYearControler /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      idadeAno: {
        type: "number",          
      },
    },
  },
} 
*/)
routes.get('/consultaVacinaMes', getProtectionVaccineUntilMonthControler /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      idadeMes: {
        type: "number",          
      },
    },
  },
} 
*/)
routes.get('/consultaVacinaMesExato', getProtectionVaccineExactMonthControler /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      idadeMes: {
        type: "number",          
      },
    },
  },
} 
*/)

routes.get('/vacinaPaciente/:id_paciente', getPatientVacinneControler 
//#swagger.tags = ['Rotas Vacinas']
/*#swagger.parameters['']*/)
routes.get('/vacinaFaltaPaciente/:id_paciente', getPatientMissingVacinneControler
//#swagger.tags = ['Rotas Vacinas']
/*#swagger.parameters['']*/)


routes.post('/campanha', createCampaingController /*
#swagger.tags = ['Rotas Campanha']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      descricao: {
        type: "number",          
      },
      data_inicio: {
        type: "number"
      },
      data_fim: {
        type: "number"
      },
    },
  },
} 
*/)
routes.patch('/campanha/:id', updateCampaingController /*
#swagger.tags = ['Rotas Campanha']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      descricao: {
        type: "number",          
      },
      data_inicio: {
        type: "number"
      },
      data_fim: {
        type: "number"
      },
    },
  },
} 
*/)
routes.post('/campanha/vacina', createVaccineInCampaingController /*
#swagger.tags = ['Rotas Campanha']
#swagger.parameters['paciente'] = {      
  in: 'body',
  type: 'object',
  required: false,
  '@schema': {
    properties: {
      id_campanha: {
        type: "number",          
      },
      id_vacina: {
        type: "number"
      },
    },
  },
} 
*/)
routes.delete('/campanha/vacina/:id', deleteVaccineInCampaingController /*
#swagger.tags = ['Rotas Campanha']
#swagger.parameters['']
*/)
routes.get('/campanhadate/:date', searchCampaingForDataController /*
#swagger.tags = ['Rotas Campanha']
#swagger.parameters['']
*/)
routes.get('/campanhaprotecao/:disease', campaingByProtectionController/*
#swagger.tags = ['Rotas Campanha']
#swagger.parameters['doença']
*/)

routes.post("/vacina", createVaccineController /*
#swagger.tags = ['Rotas Vacinas']
#swagger.parameters['paciente'] = {      
    in: 'body',
    type: 'object',
    required: false,
    '@schema': {
      properties: {
        vacina: {
          type: "string",          
        },
        sigla_vacina: {
          type: "string"
        },
        doenca_protecao: {
          type: "string"
        },
        dose: {
          type: "string"
        },
        id_rede: {
          type: "number"
        },
        
      },
    },
  } 
  */)


module.exports = routes
