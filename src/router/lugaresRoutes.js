const express = require("express")
const router = express.Router()
const controller = require("../controller/lugaresController")

router.get("/", controller.getLugares)
router.get("/tipo/:tipo", controller.getTipo)
router.get("/nome/:nome", controller.getNome)
router.get("/id/:_id", controller.getById)
router.post("/criar", controller.addLugar)
router.put("/atualizar/:_id", controller.upDate)
router.delete("/delete/:_id", controller.delLocalById)


module.exports = router 
