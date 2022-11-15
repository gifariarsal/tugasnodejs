const express = require('express');
const Controller = require('../controllers/controller');
const sapaan = require('../controllers/sapaan')

const router = express.Router();

router.get('/', Controller.helloWorld);

module.exports = router;
