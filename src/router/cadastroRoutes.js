const express = require("express")
const router = express.Router()
const controller = require('../controller/cadastroController');

router.get("/create", controller.addCadatro)
router.get("/", controller.getCadastro)
router.get("/remove/:id", controller.removeCadastro)
router.get("/edit/:id", controller.editCadastro)



module.exports = router 