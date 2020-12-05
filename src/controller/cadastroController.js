const userCollection = require('../model/schemaUsuarios');
const bcrypt = require('bcrypt');

module.exports = {
    
    addCadatro: async (request, response) => {
        const body = request.body;
        body.senha = await bcrypt.hash(body.senha, 12);
        const cadastro = new userCollection(body);

        cadastro.save((error) => {
            if(error) {
                return response.status(400).send(error);
            }
            return response.status(201).send(account);
        });
    },

    getCadastro: (request, response) => {
        userCollection.find((error, accounts) => {
            if(error) {
                return response.status(500).send(error);
            } 
            return response.status(200).send(accounts);
        });
    },

    removeCadastro: (request, response) => {
        const idParam = request.params.id;
        userCollection.findByIdAndDelete(idParam, (error, account) => {
            if(error) {
                return response.status(500).send(error);
            } else if(account) {
                return response.status(200).send('Conta apagada!');
            }
            return response.sendStatus(404);
        });
    },

    editCadastro: (request, response) => {
        const idParam = request.params.id;
        const body = request.body;
        const options = { new: true };

        userCollection.findByIdAndUpdate(
            idParam, body, options, (error, account) => {
                if(error) {
                    return response.status(500).send(error);
                } else if(account) {
                    return response.status(200).send(account);
                }
                return response.sendStatus(404);
            }
        );
    }
};

