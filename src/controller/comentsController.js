const comentarioCollection = require('../model/schemaComents')
const lugarCollection = require('../model/schemaLugares')
const userCollection = require('../model/schemaUsuarios')



const postComent = (req, res) => {
    console.log(req.url)
    const comentBody = req.body
    // const lugarBody = req.params.id
    // const userBody = req.params.nome


    const comentarioAdd = new comentarioCollection(comentBody)

    comentarioAdd.save((error) => {
        if (error) {
            return res.status(400).send({
                mensagem: "Erro ao avaliar, tente novamente", 
                error
            })
        }
        return res.status(200).send({
            mensagem: "Local avaliado com sucesso", 
            comentarioAdd
        })
    })

}


const getComents = (req,res)=>{
    console.log(req.url)

    comentarioCollection.find((error,comentario)=>{ 
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({
                mensagem: "Todos os comentarios...",
                comentario
            })
        }
    })
}





module.exports = {
    postComent,
    getComents
}