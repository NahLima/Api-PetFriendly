const userCollection = require('../model/schemaUsuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


// criar um usuario novo 
const createUser = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10); // o segundo argumento ( o numero) significa qu qto maior esse numero mais complexa é o seu hash
  req.body.senha = senhaComHash;
  const usuario = new userCollection(req.body);

  usuario.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(201).send({
      mensagem: "usuario criado com sucesso!",
      usuario
    })
  })
};


//get all users
const getAllUser = (req, res) => {
  userCollection.find((error, contas) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send({
      mensagen:"Cadastros disponíveis",
      contas
    });
  });
}


const getByIdUser = (req, res) => {
  const idParam = req.params.id
  
  userCollection.findById(idParam, (error, userID)=>{
      if(error){
          return res.status(404).send({mensagem:"ID não encontrado"})
      }else{
          if(userID){
              return res.status(200).send({
              mensagem:"Usuário encontrado!",
              userID})
          }else{
              return res.status(404).send("Não encontrado.")
          }
      }
  })
}


//deletar um usuário
const delUserById = (req,res)=>{
  const idParam = req.params.id
  userCollection.findByIdAndDelete(idParam, (error, contatoID)=>{
      if(error){
          return res.status(500).send(error)
      }else{
          if(contatoID){
              return res.status(200).send({
                mensagem:"conta apagada"})
          }else{
              return res.status(404).send({
                mensagem:"usuário(a) não encontrado(a)"
              })
          }
      }
  })
}
  

// vendo se o login/senha existem  
const loginUser = (req, res) => {

  userCollection.findOne({ email: req.body.email }, function (error, user) {
    if (!user) {
      return res.status(404).send({
        mensagem:`Não existe cadastro com esse email ${req.body.email}`
      });
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, user.senha); // compara a senha do usuario (campareSync)

    if (!senhaValida) {
      return res.status(403).send({
         mensagem: "senha incorreta" 
        });
    }

    const token = jwt.sign({ email: req.body.email }, SECRET); // criando um token 

    return res.status(200).send({
      mensagem: "Bem vindo!",
      token  // Ele é formado por três seções: Header, Payload e Signature.
    });
  });
}


module.exports = {
  createUser,
  getAllUser,
  getByIdUser,
  delUserById,
  loginUser
}

