const express = require('express');
const router = express.Router();
const doctoresController = require('../controllers/doctoresController');

router.get('/', doctoresController.getDoctor);
router.post('/', doctoresController.registrarDoctor);
module.exports = router;