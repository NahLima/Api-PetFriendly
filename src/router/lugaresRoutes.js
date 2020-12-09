const express = require("express")
const router = express.Router()
const lugarController = require("../controller/lugaresController")
const comentController = require("../controller/comentsController")


//lugares rotas
router.get("/", lugarController.getLugares)
router.get("/tipo/:tipo", lugarController.getTipo)
router.get("/nome/:nome", lugarController.getNome)
router.get("/id/:id", lugarController.getById)
router.post("/criar", lugarController.addLugar)
router.put("/atualizar/:id", lugarController.upDate)
router.delete("/delete/:id", lugarController.delLocalById)


// comentarios rota
router.post("/comentar", comentController.postComent)
router.get("/ver", comentController.getComents)



module.exports = router 

