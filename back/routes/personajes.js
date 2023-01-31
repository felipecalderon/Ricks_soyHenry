const rutaPersonaje = require("express").Router()
const db = require('../data');

rutaPersonaje.get('/', (req, res) => {
    res.json(db)
 })

rutaPersonaje.get('/:id', (req, res) => {
    const {id} = req.params
    const filtro = db.filter(personaje => personaje.id === Number(id))
    res.json(filtro)
 })

module.exports = { rutaPersonaje }