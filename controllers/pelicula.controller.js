const { response, request } = require('express');
const Peliculas = require('../models').Pelicula



const Saludo = (req, res) => {
    res.json({
        'Saludo': 'Hola Mundo',
    })
}

const Save = (req, res = response, next) => {

    try {

        const pelicula = {
            Nombre: req.body.Nombre,
            Descripcion: req.body.Descripcion,
            Genero: req.body.Genero,
            Autor: req.body.Autor,
            Year: req.body.Year,
        }

        Peliculas.create(pelicula).then(() => {
            res.json({
                msg: 'Guardado'
            })
        })

    } catch (error) {

        res.status(400).json({
            msg: 'Ha ocurrido un error',
            error
        });
    }

}

const GetAll = (req, res = response) => {


    try {
        
        Peliculas.findAll().then((data) => {
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


const GetById = (req, res = response) => {

    try {

        const { id } = req.params;
        Peliculas.findByPk(id).then((data) => {
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

        const peliculaUpdate = {
            id: req.body.id,
            Nombre: req.body.Nombre,
            Descripcion: req.body.Descripcion,
            Genero: req.body.Genero,
            Autor: req.body.Autor,
            Year: req.body.Year,
        }

       

        Peliculas.update(peliculaUpdate, {
            where: {
                id: peliculaUpdate.id
            }
        }).then(() => {
            res.status(204).json({
                mgs: 'Actualizado'
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

        Peliculas.destroy({
            where: {
                id
            }
        }).then(() => {
            res.status(200).json({
                msg: 'Registro Eliminado'
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
    Saludo,
    Save,
    GetAll,
    GetById,
    Update,
    Delete
}