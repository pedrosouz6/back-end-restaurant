const CookerRoute = require('./routes/cooker');

const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', CookerRoute);

app.listen(3333, () => console.log("Servidor rodando - 3333"));