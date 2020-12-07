const mongoose = require('mongoose')
// const schemaLugares = require('./schemaLugares') 
// const schemaUsuarios = require('./schemaUsuarios') 

const Schema = mongoose.Schema

const ComentsSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'schemaUsuarios',
        localField: 'id',
        required: true
    },
    lugarId: {
        type: Schema.Types.ObjectId,
        ref: 'schemaLugares',
        localField: 'id',
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
},
{
    versionKey: false
})

const comentarioCollection = mongoose.model('comentario', ComentsSchema)

module.exports = comentarioCollection
