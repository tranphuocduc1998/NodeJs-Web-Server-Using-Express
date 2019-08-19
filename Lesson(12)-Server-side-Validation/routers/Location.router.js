var express = require('express')
const controller = require('../controllers/Location.controller')

var router = express.Router()

router.get('/', controller.index)

router.get('/Search', controller.search)

router.get('/Additional', controller.additional)

router.post('/Additional', controller.postAdditional)

router.get('/ViewDetails/:id', controller.detail)

module.exports = router