const db = require('../data');

exports.getAll = (req, res) => {
    res.json(db)
 }

exports.getId = (req, res) => {
    const {id} = req.params
    const filtro = db.filter(personaje => personaje.id === Number(id))
    res.json(filtro)
 }