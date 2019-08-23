const db = require('../db')

module.exports.getCart = function (request, response) {
    const sessionId = request.signedCookies.sessionId
    let products = []
    let cart = {}
    if (sessionId !== undefined) {
        const sessionsCart = db.get('sessions').find({ id: sessionId }).value()
        for (const key in sessionsCart.cart) {
            if (sessionsCart.cart.hasOwnProperty(key)) {
                cart = db.get('products').find({ id: key }).value()
                cart.productSum = sessionsCart.cart[key]
                products.push(cart)
            }
        }
    }
    response.render('Cart', {
        products: products
    })
}

module.exports.addToCart = function (request, response) {
    const productId = request.params.productId
    const sessionId = request.signedCookies.sessionId
    if (!sessionId) {
        response.redirect('/Product')
        return
    }
    const count = db.get('sessions').find({ id: sessionId }).get('cart.' + productId, 0).value()
    db.get('sessions').find({ id: sessionId }).set('cart.' + productId, count + 1).write()
    response.redirect('/Product')
}