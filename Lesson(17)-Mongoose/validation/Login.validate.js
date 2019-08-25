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

    next()
}