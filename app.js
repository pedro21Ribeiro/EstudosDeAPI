const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const services = require("./API/routes");


app.use("/servicos",services);

app.listen(port);

console.log(`Sever ligado na porta ${port}`);