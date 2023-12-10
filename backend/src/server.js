require('dotenv/config')
const app = require('./app')
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../../swagger_output.json");

app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.use("/api", routes);
app.listen(process.env.PORT, () => {
    console.log(`Escutando na porta ${process.env.PORT}`)
})





