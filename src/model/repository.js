const mongoose = require('mongoose')
const DB_URL = "mongodb://localhost:27017/APIPET"

//mongoose.Promise = global.Promise //*


// String de conexão
const connect = ()=>{
    mongoose.connect(DB_URL, {useNewUrlParser:true}) // conexão com mongo db
    const connection = mongoose.connection
//captura erro ou sucesso na conexão
    connection.on("error", ()=> console.error("Error ao conectar com MongoDB"))
    connection.once("open",()=> console.log("conectamos no MongoDB"))

}

module.exports = {connect}

