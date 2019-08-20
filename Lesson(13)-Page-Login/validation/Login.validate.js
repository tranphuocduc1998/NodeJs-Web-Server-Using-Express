const md5 = require('md5')

const db = require('../db')

module.exports.postLogin = function (request, response, next) {
    const errors = []
    if (!request.body.account) {
        errors.push('Bạn chưa nhập tài khoản!')
    }
    if (!request.body.password) {
        errors.push('Bạn chưa nhập mật khẩu!')
    }

    if (errors.length > 0) {
        response.render('Login/LoginPage', {
            errors: errors,
            value: request.body
        })
        return
    }

    const hashaPass = md5(request.body.password)

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

    next()
}