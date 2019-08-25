const express = require('Express')

const controller = require('../controllers/product.controller')

const router = express.Router()

router.get('/', controller.getProduct)

module.exports = router