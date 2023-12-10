const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: 'Carteira de Vacinação',
      description: 'Api para controle de Vacinação',
    },
    host: 'localhost:3001',
    schemes: ['http'],
    tags: [
      {
          "description": "<h2>Está é uma api onde você pode se cadastrar ver vacinas por idade vem campanhas por data entre outras funcionalidade. Bom uso!</h2>"
      }
  ],
  };
  
// criar a pasta "swagger" manualmente na raiz do projeto
const outputFile = "swagger_output.json";
const endpointsFiles = ["./backend/src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);