
const express = require('express');
const router = express.Router();

const peliculasRoutes = require('./pelicula.router')


router.use('/Peliculas' , peliculasRoutes)


module.exports = router;