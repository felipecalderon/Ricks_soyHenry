const express = require('express')
const cors = require('cors')
const app = express()
const { rutaPersonaje } = require('./routes/personajes.js')
const { rutaImgs } = require('./routes/imagenes.js')
app.use(express.json())
app.use(cors())

app.use("/", rutaPersonaje)
app.use("/imgs", rutaImgs)

const PORT = 3001;

app.listen(PORT, () => {
   console.log(`Backend onfire in port ${PORT} 🎉`)
})
