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
    versionKey: false 
});

const userCollection = mongoose.model('cadastroUser', userSchema);

module.exports = userCollection;