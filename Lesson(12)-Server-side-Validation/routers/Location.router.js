var express = require('express')
const controller = require('../controllers/Location.controller')
const validate = require('../validation/localtion.validate')
var router = express.Router()

router.get('/', controller.index)

router.get('/Search', controller.search)

router.get('/Additional', controller.additional)

router.post('/Additional', validate.postAdditional ,controller.postAdditional)

router.get('/ViewDetails/:id', controller.detail)

module.exports = router