require('dotenv-safe').config();

const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')

const app = express()

//string de conexão
//mongoose.connect("mongodb://localhost:27017/APIPET") -- rodar localmente
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:true
})

//conexão com o mongo
let db = mongoose.connection

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso!")
})


//rotas
const index = require('./router/index')
const lugares = require('./router/lugaresRoutes')
const users = require('./router/userRoutes');
//const { MongooseDocument } = require('mongoose');

//db.connect()
//app.use(cors())
app.use(express.json())
app.use(bodyParser.json()) // configura body-parser

// app.use(function (req, res, next) {  // função do express pode ser usado caso não instale o body-parser
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//       )
//       next()
//     })

app.use('/', index)
app.use('/lugares', lugares)
app.use('/users',users)

module.exports = app
