const express = require("express");
const router = express.Router();
const controller = require('../controller/userController');

router.post('/create', controller.createUser);
router.get('/', controller.getAllUser);
router.delete('/id/:id', controller.delUserById);
router.post('/login', controller.loginUser);

module.exports = router;
