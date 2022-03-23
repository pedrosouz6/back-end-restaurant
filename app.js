const CookerRoute = require('./routes/User/cooker');
const WaiterRoute = require('./routes/User/waiter');
const AdminRoute = require('./routes/User/admin');
const RequestRoute = require('./routes/Request/request');

const Dish = require('./routes/Menu/menu');

const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

//User
app.use('/', CookerRoute);
app.use('/', WaiterRoute);
app.use('/', AdminRoute);
app.use('/', RequestRoute);

//Dish
app.use('/', Dish);

app.listen(3333, () => console.log("Servidor rodando - 3333"));