const mongoose = require('mongoose')
const DB_URL = "mongodb://localhost:27017/APIPET"

const connect = ()=>{
    mongoose.connect(DB_URL, {useNewUrlParser:true})
    const connection = mongoose.connection

    connection.on("error", ()=> console.error("Error ao conectar com MongoDB"))
    connection.once("open",()=> console.log("conectamos no MongoDB"))

}

module.exports = {connect}
