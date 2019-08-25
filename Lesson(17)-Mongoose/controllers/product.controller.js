const products = require('../models/products.model')

module.exports.getProduct = async function (request, response) {
    const page = parseInt(request.query.page) || 1
    const perPage = 8;

    const begin = (page - 1) * perPage;
    const end = page * perPage

    const sumValues = await products.find()
    response.render('product', {
        products: sumValues.slice(begin, end),
        pageChossed: page,
        sumPage: Math.ceil(sumValues.length/8)
        // products: db.get('products').drop(begin).take(end).value()
    })
}