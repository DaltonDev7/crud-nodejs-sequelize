

const express = require('express');
const peliculaController = require('../controllers/pelicula.controller');
const router = express.Router();

router.get("/Saludo" , peliculaController.Saludo);
router.post("/Save" , peliculaController.Save);
router.get("/Get" , peliculaController.GetAll);
router.get("/GetById/:id" , peliculaController.GetById);
router.post("/Update" , peliculaController.Update);
router.get("/Delete/:id" ,peliculaController.Delete)



module.exports = router;
