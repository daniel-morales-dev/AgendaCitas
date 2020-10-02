const express = require('express');
const horarioController = require('../controllers/horariosController');
const router = express.Router();
router.get('/', horarioController.getHorario);
module.exports = router;