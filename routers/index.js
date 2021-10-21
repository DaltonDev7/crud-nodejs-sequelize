
const express = require('express');
const router = express.Router();

const peliculasRoutes = require('./pelicula.router')
const usuariosRoutes = require('./usuario.router')


router.use('/Peliculas' , peliculasRoutes)
router.use('/Usuarios' , usuariosRoutes)


module.exports = router;




