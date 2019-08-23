const md5 = require('md5')
const db = require('../db')
const shortid = require('shortid')

module.exports.index = function (request, response) {
    response.render('Index', {
        listcontact: db.get('infoContact').value()
    })
}

module.exports.search = function (request, response) {
    const contentSearch = request.query.contentSearch
    const listSearched = db.get('infoContact').value().filter(function (item) {
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
    //nhận lại dự liệu bên validate
    // console.log(response.locals);
    request.body.id = shortid.generate();
    const hashPass = md5(request.body.password)
    request.body.password = hashPass
    db.get('infoContact').push(request.body).write()
    response.redirect('/')
}

module.exports.detail = function (request, response) {
    const id = request.params.id
    const details = db.get('infoContact').find({ id: id }).value()
    response.render('ViewDetails', { info: details })
}