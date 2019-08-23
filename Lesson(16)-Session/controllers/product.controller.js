const db = require('../db')
module.exports.getProduct = function (request, response) {
    const page = parseInt(request.query.page) || 1
    const perPage = 8;

    const begin = (page - 1) * perPage;
    const end = page * perPage

    const sumValues = db.get('products').value()
    response.render('product', {
        products: db.get('products').value().slice(begin, end),
        pageChossed: page,
        sumPage: Math.ceil(sumValues.length/8)
        // products: db.get('products').drop(begin).take(end).value()
    })
}