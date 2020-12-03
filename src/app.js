const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./model/repository')


const index = require('./router/index')
const lugares = require('./router/lugaresRoutes')

db.connect()
app.use(cors())
app.use(express.json())
app.use('/', index)
app.use('/lugares', lugares)

module.exports = app

