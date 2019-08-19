var express = require('express')
const controller = require('../controllers/Location.controller')
const validate = require('../validation/localtion.validate')
var router = express.Router()

router.get('/', validate.getCookie,controller.index)

router.get('/Search', validate.getCookie , controller.search)

router.get('/Additional', validate.getCookie, controller.additional)

router.post('/Additional', validate.getCookie, validate.postAdditional ,controller.postAdditional)

router.get('/ViewDetails/:id', validate.getCookie, controller.detail)

module.exports = router