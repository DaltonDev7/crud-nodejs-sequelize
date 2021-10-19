
const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuario.router')


router.use('/Usuarios' , usuarioRoutes)

module.exports = router;