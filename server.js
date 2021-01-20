const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
require('./config/database')
// el comando de arriba ejecuta el archivo cuando se carga el sv

const app = express()

// MIDDLEWARES
app.use(cors())
app.use(express.json())
// Comando que le dice que trabaje interpretando json que le llegan por apis.

app.use('/api', router)

app.listen(4000, ()=> console.log("app listening on port 4000"))