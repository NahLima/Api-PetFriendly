//require('dotenv-safe').config();
const dotenv = require('dotenv') //
dotenv.config()  //

const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()



//string de conexão
mongoose.connect(process.env.MONGODB_URI,{
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

app.use(cors())
app.use(express.json())
app.use(bodyParser.json()) // configura body-parser

// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// )

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

