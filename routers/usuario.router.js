

const express = require('express');
const usuarioontroller = require('../controllers/usuario.controller');
const router = express.Router();

router.get("/Saludo" , usuarioontroller.Saludo);
router.post("/Save" , usuarioontroller.Save);
router.get("/Get" , usuarioontroller.GetAll);
router.get("/GetById/:id" , usuarioontroller.GetById);
router.post("/Update" , usuarioontroller.Update);
router.get("/Delete/:id" ,usuarioontroller.Delete)



module.exports = router;
