
const  { response} = require('express');

const usuariosGet = (req, res = response) => {

    const {q,nombre} = req.query;
    
    res.json({
        message: 'get API  -  controlador usuarios',
        
        q,
        nombre,
        
    })
}
const usuariosPost = (req, res) => {
    const {nombre,edad} = req.body;
    res.json({
        ok: true,
        message: 'post API - controlador usuarios',
        nombre,
        edad
    });
}
const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        ok: true,
        message: 'put API - controlador usuarios',
        id
    });
}
const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        message: 'patch API - controlador usuarios'
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        message: 'delete API - controlador usuarios'
    });
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}