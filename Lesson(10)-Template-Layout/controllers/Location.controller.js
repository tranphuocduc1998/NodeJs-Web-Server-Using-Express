const db = require('../db')
const shortid = require('shortid')

module.exports.index = function (request, response) {
    response.render('TestSearch', {
        listItem: db.get('listed').value()
    })
}

module.exports.search = function (request, response) {
    const contentSearch = request.query.contentSearch
    const listSearched = db.get('listed').value().filter(function (item) {
        return item.value.toLowerCase().indexOf(contentSearch.toLowerCase()) !== -1
    })
    response.render('TestSearch', {
        listItem: listSearched
    })
}

module.exports.additional = function (request, response) {
    response.render('AddValues')
}

module.exports.postAdditional = function (request, response) {
    request.body.id = shortid.generate();
    db.get('listed').push(request.body).write()
    response.redirect('/')
}

module.exports.detail = function (request, response) {
    const id = request.params.id
    const details = db.get('listed').find({ id: id }).value()
    response.render('ViewDetails', { info: details })
}