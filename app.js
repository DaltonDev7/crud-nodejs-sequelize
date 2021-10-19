
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRoutes = require('./routers/index')

app.use(bodyParser.json())
app.use('/api', indexRoutes);

const cors = require('cors');
// habilitar cors para permitir consultar desde frondend externo
app.use(cors());



module.exports = app;