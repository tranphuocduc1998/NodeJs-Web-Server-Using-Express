const md5 = require('md5')
const infoContact = require('../models/infoContact.model')

module.exports.onLogin = function (request, response) {
    response.render('Login/LoginPage')
}

module.exports.onPostLogin = async function (request, response) {
    const hashaPass = md5(request.body.password)
    const errors = []
    const id = await infoContact.findOne({ account: request.body.account, password: hashaPass })
    if (!id) {
        errors.push('không có tài khoản này')
        response.render('Login/LoginPage', {
            errors: errors,
            value: request.body
        })
        return
    }
    response.cookie('AccountId', res._id, { signed: true })
    response.redirect('/')
}