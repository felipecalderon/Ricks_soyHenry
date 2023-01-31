const rutaPersonaje = require("express").Router()
const controllers = require('../controller/personaje.controller.js')

rutaPersonaje.get('/', controllers.getAll)

rutaPersonaje.get('/:id', controllers.getId)

module.exports = { rutaPersonaje }