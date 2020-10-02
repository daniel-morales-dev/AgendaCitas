const express = require('express');
const doctoresController = require('../controllers/doctoresController');
const router = express.Router();
router.post('/', doctoresController.loginDoctor);
module.exports = router;