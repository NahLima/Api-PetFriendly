const userCollection = require('../model/schemaUsuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


// criar um usuario novo 
const createUser = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const usuario = new userCollection(req.body);

  usuario.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(usuario.toJSON())
  })
};


//get all
const getAllUser = (req, res) => {
  userCollection.find((error, contas) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send(contas);
  });
}


const delUserById = (req,res)=>{
  const idParam = req.params.id
  userCollection.findByIdAndDelete(idParam, (error, contatoID)=>{
      if(error){
          return res.status(500).send(error)
      }else{
          if(contatoID){
              return res.status(200).send({mensagem:"conta apagada"})
          }else{
              return res.status(404).send("usuário(a) não encontrado(a)")
          }
      }
  })
}
  

 
const loginUser = (req, res) => {

  userCollection.findOne({ email: req.body.email }, function (error, user) {
    if (!user) {
      return res.status(404).send(`Não existe cadastro com esse email ${req.body.email}`);
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, user.senha);

    if (!senhaValida) {
      return res.status(403).send({ mensagem: "senha incorreta" });
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);

    return res.status(200).send(token);
  });
}


module.exports = {
  createUser,
  getAllUser,
  delUserById,
  loginUser
}

