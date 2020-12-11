const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lugaresSchema = new Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto:true,
        required: true
    },
    nome:{
    type: String,
    required: true
    },
    tipo:{
    type:String,
    required: true
    },
    unidade:{
        type:String,
        required:false
    },
    endereço:{
        type: String, 
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    site:{
        type: String,
        required: true
    },
    instagram:{
        type: String,
        required: true
    },

},

{
    //collection:"PetFriendly",  // para puxar os dados que já tenho no banco de dados
    versionKey:false
})


// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const lugaresCollection = mongoose.model('PetFriendly', lugaresSchema)

// exportar o model para ser utilizado
module.exports = lugaresCollection