// 1. require mongoose
const mongoose = require('mongoose')

// 2. connect
mongoose.connect('mongodb://localhost/myDatabase')

// 3. create Schema
const productSchema = new mongoose.Schema({
    first_name: String,
    image: String,
    description: String
})

// 4. create Model
const Product = mongoose.model('Product', productSchema, 'products')

module.exports = Product
