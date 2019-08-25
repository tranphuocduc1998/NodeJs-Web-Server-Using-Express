const express = require('Express')

const controller = require('../controllers/Cart.controller')

const router = express.Router()

router.get('', controller.getCart)

router.get('/Add/:productId', controller.addToCart)

module.exports = router 