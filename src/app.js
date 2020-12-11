//require('dotenv-safe').config();


const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv') //
const app = express()


dotenv.config({path: '.env'}) //

//string de conexão
mongoose.Promise = global.Promise //

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



app.use('/', index)
app.use('/lugares', lugares)
app.use('/users',users)

module.exports = app

