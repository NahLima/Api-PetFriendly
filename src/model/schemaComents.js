const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ComentsSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'schemaUsuarios',
        required: true
    },
    lugarId: {
        type: Schema.Types.ObjectId,
        ref: 'schemaLugares',
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

