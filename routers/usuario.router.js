const express = require('express');
const usuarioController = require('../controllers/usuario.controller');
const router = express.Router();




router.post("/Save" , usuarioController.SaveUsuario);
router.get("/Get" , usuarioController.GetAll);
router.get("/GetById/:id" , usuarioController.GetById);
router.post("/Update" , usuarioController.Update);
router.get("/Delete/:id" ,usuarioController.Delete)


module.exports = router;