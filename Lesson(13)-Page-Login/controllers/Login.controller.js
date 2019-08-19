

module.exports.onLogin = function(request, response){
    response.render('Login/LoginPage')
}

module.exports.onPostLogin= function(request, response){
    response.redirect('/')
}