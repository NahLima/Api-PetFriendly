const lugaresCollection = require('../model/schemaLugares')


//getAll lugares
const getLugares = (req,res)=>{
    console.log(req.url)

    lugaresCollection.find((error,lugares)=>{ 
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
const getById = (req, res) => {
    const idParam = req.params.id
    
    lugaresCollection.findById(idParam, (error, localID)=>{
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
const getTipo = (req, res) => {
        const nomeParam = req.params.tipo
        lugaresCollection.find({tipo:nomeParam}, (error, tipo) => {
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
const getNome = (req,res) => {
    const nomeParam = req.params.nome // normalize("NFD").replace(/[^a-zA-Zs]/g, "")

    lugaresCollection.find({nome: new RegExp(nomeParam,'i')},(error,nomeLugar)=>{  

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
const addLugar  = (req,res)=>{
    
    const lugarBody = req.body 
    const lugarAdd= new lugaresCollection(lugarBody)

    lugarAdd.save((error)=>{   
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

const upDate = (req,res) =>{
    const idParam = req.params.id
    const atualizaBody = req.body
    const novo = {new:true} // editamos dizendo que estamos apenas atualizando

    lugaresCollection.findByIdAndUpdate(idParam, atualizaBody, novo,(error,atualiza)=>{

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

const delLocalById = (req,res)=>{
    const idParam = req.params.id
    lugaresCollection.findByIdAndDelete(idParam, (error, contatoID)=>{
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

