var express = require('express')
const shortid = require('shortid')
const db = require('../db')

var router = express.Router()

router.get('/', function (request, response) {
    response.render('TestSearch', {
        listItem: db.get('listed').value()
    })
})

router.get('/Search', function (request, response) {
    const contentSearch = request.query.contentSearch
    const listSearched = db.get('listed').value().filter(function (item) {
        return item.value.toLowerCase().indexOf(contentSearch.toLowerCase()) !== -1
    })
    response.render('TestSearch', {
        listItem: listSearched
    })
})

router.get('/Additional', function (request, response) {
    response.render('AddValues')
})

router.post('/Additional', function (request, response) {
    request.body.id = shortid.generate();
    db.get('listed').push(request.body).write()
    response.redirect('/')
})

router.get('/ViewDetails/:id', function (request, response) {
    const id = request.params.id
    const details= db.get('listed').find({ id: id}).value()
    response.render('ViewDetails', {info: details})
})

module.exports = router