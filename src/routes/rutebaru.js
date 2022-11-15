const express = require('express');
const Controller = require('../controllers/controller');
const sapaan = require('../controllers/sapaan')

const router = express.Router();

router.get('/sapa', sapaan.sayHalo);

module.exports = router;
