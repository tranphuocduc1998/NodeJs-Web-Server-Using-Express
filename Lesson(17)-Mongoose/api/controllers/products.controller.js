const products = require('../../models/products.model')

module.exports.getProduct = async function (request, response) {
    const sumValues = await products.find()
    response.json(sumValues)
}