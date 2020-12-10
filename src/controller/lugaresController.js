const lugaresCollection = require('../model/schemaLugares')


//getAll lugares
const getLugares = async (req,res)=>{
    console.log(req.url)

    await lugaresCollection.find((error,lugares)=>{ 
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({
                mensagem: "Get- todos os lugares, feito com sucesso",
                lugares
            })
        }
    }).sort({nome:1})
}


//Get ID
const getById = async (req, res) => {
    const idParam = req.params.id
    
    await lugaresCollection.findById(idParam, (error, localID)=>{
        if(error){
            return res.status(404).send({mensagem:"ID não encontrado"})
        }else{
            if(localID){
                return res.status(200).send({
                mensagem:"ID encontrado!",
                localID})
            }else{
                return res.status(404).send("Não encontrado.")
            }
        }
    })
}

// GET tipo
const getTipo = async (req, res) => {
        const nomeParam = req.params.tipo
        await lugaresCollection.find({tipo:nomeParam}, (error, tipo) => {
          if(error) {
            return res.status(500).send(error)
    
          } else if(tipo == '') {
            return res.status(404).send('Local não encontrado.')
    
          } else {
            return res.status(200).send(tipo)
          }
        })
      }

//Get nome
const getNome = async (req,res) => {
    const nomeParam = req.params.nome // normalize("NFD").replace(/[^a-zA-Zs]/g, "")

    await lugaresCollection.find({nome: new RegExp(nomeParam,'i')},(error,nomeLugar)=>{  

        if(error){
            return res.status(404).send(error)
        }else{
            if(nomeLugar){
                return res.status(200).send({
                mensagem:"Lugares encontrados!",
                nomeLugar})
            }else{
                return res.status(404).send("Lugar não encontrado")
            }
        }
    }).sort({nome:1})
}
 

// POST add novo lugar
const addLugar  =async (req,res)=>{
    
    const lugarBody = req.body 
    const lugarAdd= new lugaresCollection(lugarBody)

    await lugarAdd.save((error)=>{   
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(200).send({
                mensagem: "POST com sucesso",
                lugarAdd
            })
        }
    })
}

// PUT atualizar 

const upDate = async (req,res) =>{
    const idParam = req.params.id
    const atualizaBody = req.body
    const novo = {new:true} // editamos dizendo que estamos apenas atualizando

    await lugaresCollection.findByIdAndUpdate(idParam, atualizaBody, novo,(error,atualiza)=>{

            if(error) {
                return res.status(500).send(error)
            } else if (atualiza) {
                return res.status(200).send({mensagem: "Atualização realizada",atualiza})
            } else {
                return res.status(404).send({mensagem: "Contato não encontrado"})
        }
    
    })
}



// deletar pelo id

const delLocalById = async (req,res)=>{
    const idParam = req.params.id
    await lugaresCollection.findByIdAndDelete(idParam, (error, contatoID)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(contatoID){
                return res.status(200).send({mensagem:"lugar apagado"})
            }else{
                return res.status(404).send("Local não encontrado")
            }
        }
    })
}
    

      


module.exports = {
    getLugares,
    getTipo,
    getNome,
    getById,
    addLugar,
    upDate,
    delLocalById
} 

