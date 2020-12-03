const lugaresColletion = require('../model/schemaLugares')
//const lugaresCollection = require('../model/Schema')

//getAll lugares
const getLugares = (req,res)=>{
    console.log(req.url)

    lugaresColletion.find((error,lugares)=>{ 
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({
                mensagem: "Get- todos os lugares, feito com sucesso",
                lugares
            })
        }
    })
}

//get por tipo
const getTipo = (req,res) => {
    const tipoParam = req.params.tipo
    lugaresColletion.find({tipo: new RegExp(tipoParam,'i')},(error,tipoLugar)=>{    //procura no banco de dados qualquer palavra sem diferenciação de maiscula e minuscula
    
        if(error){
            return res.status(500).send(error)
        }else{
            if(tipoLugar){
                return res.status(200).send({
                    mensagem: "Lugares encontrados!",
                    tipoLugar
                })
            }else{
                return res.status(404).send({
                    mensagem :"Nada encontrado,digite algum texto"
                })
            }
        }
    })
}

//get por nome e qualquer outra letra 
//db.users.find({"name": /string/})  
//db.users.find({"name": {"$regex": "string", "$options": "i"}})
// db. mulheresincriveis.find({ "nome" : /^a/ }).pretty() – um nome que comece com a.
const getNome = (req,res) => {
    const nomeParam = req.params.nome    //
    lugaresColletion.find({nome: new RegExp(nomeParam,'i')},(error,nomeLugar)=>{  
    //lugaresColletion.find({name: { $regex: new RegExp(nomeParam), $options: 'i'}},(error,nomeLugar)=>{  
        if(error){
            return res.status(500).send(error)
        }else{
            if(nomeLugar){
                return res.status(200).send(nomeLugar)
            }else{
                return res.status(404).send("Tipo de lugar não encontrado")
            }
        }
    })
}
 

// post add novo lugar
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

// Update atualizar lugar telefone

const upDateCel = (req,res) =>{
    const idParam = req.params._id
    const telBody = req.body
    const novo = {new:true} // editamos dizendo que estamos apenas atualizando

    lugaresCollection.findByIdAndUpdate(idParam, telBody, novo,(error,telNovo)=>{

            if(error) {
                return res.status(500).send(error)
            } else if (telNovo) {
                return res.status(200).send({mensagem: "Celular atualizado",telNovo})
            } else {
                return res.status(404).send({mensagem: "Contato não encontrado"})
        }
    
    })
}




// deletar pelo nome
const delLugarNome = (req,res)=>{
    const nomeParam = req.params.nome

    lugaresCollection.deleteOne({"nome":nomeParam}, (error, localNome)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(localNome){
                return res.status(200).send({mensagem:"local apagado"})
            }else{
                return res.status(404).send("local não encontrado")
            }
        }
    })
}

// deletar pelo id

const delLocalById = (req,res)=>{
    const idParam = req.params._id
    lugaresCollection.findByIdAndDelete(idParam, (error, LugarID)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(LugarID){
                return res.status(200).send({mensagem:"Lugar apagado"})
            }else{
                return res.status(404).send("Lugar não encontrado")
            }
        }
    })
}



module.exports = {
    getLugares,
    getTipo,
    getNome,
    addLugar,
    upDateCel,
    delLugarNome,
    delLocalById

}