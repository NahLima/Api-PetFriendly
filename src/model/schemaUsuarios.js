const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
        //select:false
    },
    
},
{
    versionKey: false //gera por padrão uma versão para cada atualização do documento
});

const userCollection = mongoose.model('cadastroUser', userSchema);

module.exports = userCollection;