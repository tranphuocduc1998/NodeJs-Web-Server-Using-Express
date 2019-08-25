// 1. require mongoose
const mongoose = require('mongoose')

// 2. connect
mongoose.connect('mongodb://localhost/myDatabase')

// 3. create Schema
const infoContactSchema = new mongoose.Schema({
    displayname: String,
    age: String,
    account: String,
    password: String
})

// 4. create Model
const infoContacts = mongoose.model('infoContacts', infoContactSchema, 'infoContact')

module.exports = infoContacts
