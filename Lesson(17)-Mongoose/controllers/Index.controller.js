const md5 = require('md5')
const infoContact = require('../models/infoContact.model')

module.exports.index = async function (request, response) {
    const listcontact = await infoContact.find()
    response.render('Index', {
        listcontact: listcontact
    })
}

module.exports.search = async function (request, response) {
    const contentSearch = request.query.contentSearch
    const listcontact = await infoContact.find()
    const listSearched = listcontact.filter(function (item) {
        return item.displayname.toLowerCase().indexOf(contentSearch.toLowerCase()) !== -1
    })
    response.render('Index', {
        listcontact: listSearched
    })
}

module.exports.additional = function (request, response) {
    response.render('AddValues')
}

module.exports.postAdditional = function (request, response) {
    const hashPass = md5(request.body.password)
    request.body.password = hashPass
    infoContact.create(request.body)
    response.redirect('/')
}

module.exports.detail = async function (request, response) {
    const id = request.params.id
    const details = await infoContact.findOne({ _id: id})
    response.render('ViewDetails', { info: details })
}