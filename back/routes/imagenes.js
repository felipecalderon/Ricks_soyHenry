const rutaImgs = require("express").Router()
const path = require('path');
const db = require('../data');

rutaImgs.get("/:id", (req, res) => {
    const {id} = req.params
    const usrData = db.find(personaje => personaje.id === Number(id))
    if (!usrData) return res.json({err: "Imagen no econtrada"})
    res.sendFile(path.resolve(`./imgs/${id}.jpg`))
})

module.exports = { rutaImgs }