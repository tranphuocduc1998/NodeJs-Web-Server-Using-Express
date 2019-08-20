const db = require('../db')


module.exports.postAdditional = function (request, response, next) {
    const errors = []
    if (!request.body.displayname) {
        errors.push('Bạn chưa nhập tên!')
    }
    if (!request.body.age) {
        errors.push('Bạn chưa nhập tuổi!')
    }
    if (!request.body.account) {
        errors.push('Bạn chưa nhập tài khoản!')
    }
    if (!request.body.password) {
        errors.push('Bạn chưa nhập mật khẩu!')
    }

    if (errors.length > 0) {
        response.render('AddValues', {
            errors: errors,
            value: request.body
        })
        return
    }
    //Chuyền dữ liệu sang Middleware khác
    // response.locals.aa = 'Dữ liệu chuyền được';
    next()
}

module.exports.getCookie = function (request, response, next) {
    if (!request.signedCookies.AccountId) {
        response.redirect('/Login/')
        return
    }

    const id = db.get('infoContact').find({ id: request.signedCookies.AccountId}).value()

    response.locals.user = id

    next()
}