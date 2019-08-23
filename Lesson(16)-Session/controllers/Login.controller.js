const md5 = require('md5')
const db = require('../db')

module.exports.onLogin = function(request, response){
    response.render('Login/LoginPage')
}

module.exports.onPostLogin= function(request, response){
    const hashaPass = md5(request.body.password)
    const errors = []
    const id = db.get('infoContact').find({ account: request.body.account, password: hashaPass }).value()

    if (!id) {
        errors.push('không có tài khoản này')
        response.render('Login/LoginPage', {
            errors: errors,
            value: request.body
        })
        return
    }

    response.cookie('AccountId', id.id, {signed: true})

    response.redirect('/')
}