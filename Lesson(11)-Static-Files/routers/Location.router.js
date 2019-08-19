var express = require('express')
const controller = require('../controllers/Location.controller')

var router = express.Router()

router.get('/', controller.onIndex)
module.exports = router