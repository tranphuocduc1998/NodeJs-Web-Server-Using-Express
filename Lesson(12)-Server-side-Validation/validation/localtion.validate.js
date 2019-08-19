module.exports.postAdditional = function(request, response, next) {
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
    //Chuyền dữ liệu sang Middleware khác
    // response.locals.aa = 'Dữ liệu chuyền được';
    next()
}