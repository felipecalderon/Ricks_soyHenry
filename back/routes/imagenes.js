const rutaImgs = require("express").Router()
const controllers = require("../controller/imgs.controller.js")

rutaImgs.get("/:id", controllers.getImg)

module.exports = { rutaImgs }