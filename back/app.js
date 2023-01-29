const db = require('./data');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
   res.json(db)
})

app.get('/:id', (req, res) => {
   const {id} = req.params
   const filtro = db.filter(personaje => personaje.id === Number(id))
   res.json(filtro)
})

app.get("/imgs/:id", (req, res) => {
      const {id} = req.params
      const usrData = db.find(personaje => personaje.id === Number(id))
      if (!usrData) return res.json({err: "Imagen no econtrada"})
      const directorio = `${__dirname}${usrData.img}`
      res.sendFile(directorio)
})

const PORT = 3001;

app.listen(PORT)
