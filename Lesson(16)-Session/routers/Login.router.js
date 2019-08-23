var express = require('express')
const controller = require('../controllers/Login.controller')
const validate = require('../validation/Login.validate')
var router = express.Router()

router.get('/', controller.onLogin)

router.post('/', validate.postLogin, controller.onPostLogin)


module.exports = router