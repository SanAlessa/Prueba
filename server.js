const express = require('express') //Libreria que nos facilita montar un servidor de manera mas facil
const path = require('path')
require('dotenv').config() //En el config se le puede agregar por ej que el dotenv lo haga funcionar en otro archivo.
const cors = require('cors') //Libreria que nos permite recibir llamados a mi servidor desde cualquier lado
const router = require('./routes/index')
require('./config/database')
// el comando de arriba ejecuta el archivo cuando se carga el sv

const app = express() // Instancia de express

// MIDDLEWARES
app.use(cors())
app.use(express.json())
// Comando que le dice que trabaje interpretando json que le llegan por apis.

app.use('/api', router)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname+"/client/build/index.html"))
  })
}

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, ()=> console.log('App listening on port ' + PORT ))
