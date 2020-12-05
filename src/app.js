const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./model/repository')
//const bcrypt = require('bcrypt')


const bodyParser = require('body-parser') // *

//rotas
const index = require('./router/index')
const lugares = require('./router/lugaresRoutes')
const cadastro = require('./controller/cadastroController')

db.connect()
app.use(cors())
app.use(express.json())
//app.use(bcrypt())
app.use(bodyParser.urlencoded({extended: true})) //*

app.use('/', index)
app.use('/lugares', lugares)
app.use('/cadastro',cadastro)

// app.use(app.router);
// routes.initialize(app)

module.exports = app

