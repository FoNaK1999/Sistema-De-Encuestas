const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.post('/',indexController.RegistrarUsuarios);


module.exports = router;
