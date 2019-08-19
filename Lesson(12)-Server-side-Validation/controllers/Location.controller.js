const db = require('../db')
const shortid = require('shortid')

module.exports.index = function (request, response) {
    response.render('TestSearch', {
        listcontact: db.get('infoContact').value()
    })
}

module.exports.search = function (request, response) {
    const contentSearch = request.query.contentSearch
    const listSearched = db.get('infoContact').value().filter(function (item) {
        return item.displayname.toLowerCase().indexOf(contentSearch.toLowerCase()) !== -1
    })
    response.render('TestSearch', {
        listcontact: listSearched
    })
}

module.exports.additional = function (request, response) {
    response.render('AddValues')
}

module.exports.postAdditional = function (request, response) {
    const errors = []
    if(!request.body.displayname){
        errors.push('Bạn chưa nhập tên!')
    }
    if(!request.body.age){
        errors.push('Bạn chưa nhập tuổi!')
    }
    
    if(errors.length > 0){
        response.render('AddValues',{
            errors: errors,
            value: request.body
        })
        return
    }
    request.body.id = shortid.generate();
    db.get('infoContact').push(request.body).write()
    response.redirect('/')
}

module.exports.detail = function (request, response) {
    const id = request.params.id
    const details = db.get('infoContact').find({ id: id }).value()
    response.render('ViewDetails', { info: details })
}