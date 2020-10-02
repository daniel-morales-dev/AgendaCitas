const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

router.post('/', citasController.registrarCita);
router.get('/', citasController.getCitasPorDia);
module.exports = router;