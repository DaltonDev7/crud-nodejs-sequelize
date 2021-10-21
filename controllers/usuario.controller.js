const { response, request } = require('express');
const Usuario = require('../models').Usuario



const SaveUsuario = async (req, res = response) => {

    try {

        const usuario = {
            Nombre: req.body.Nombre,
            Password: req.body.Password,
            Usuario: req.body.Usuario,
        }

        await Usuario.create(usuario).then(() => {
            res.status(201).json({
                msg: 'Guardado'
            })
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Ha ocurrido un error',
            error
        });
    }

}



const GetAll = async (req, res = response) => {

    try {

        await Usuario.findAll().then((data) => {
            res.status(200).json({
                data
            })
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Ha ocurrido un error',
            error
        });
    }

}

const GetById = (req, res = response) => {

    try {

        const { id } = req.params;
        Usuario.findByPk(id).then((data) => {
            res.status(200).json({
                data
            })
        })

    } catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrido un error',
            error
        });
    }

}


const Update = (req, res = response) => {


    try {

        const usuarioUpdate = {
            id: req.body.id,
            Nombre: req.body.Nombre,
            Password: req.body.Password,
            Usuario: req.body.Usuario,
        }

        Usuario.update(usuarioUpdate, {
            where: {
                id: usuarioUpdate.id
            }
        }).then(() => {
            res.status(201).json({
                mgs: 'Usuario Actualizado'
            })
        })


    } catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrido un error',
            error
        });
    }

}


const Delete = (req, res = response) => {

    try {

        const { id } = req.params;

        Usuario.destroy({
            where: {
                id
            }
        }).then(() => {
            res.status(200).json({
                msg: 'Usuario Eliminado'
            })
        })
        
    } catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrido un error',
            error
        });
    }

}




module.exports = {
    SaveUsuario,
    GetAll,
    Delete,
    GetById,
    Update
}