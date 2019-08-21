module.exports.getUpload = function(request, response){
    response.render('Upload')
}

module.exports.postUpload = function(request, response){
    response.send('Up hoàn thành')
}

module.exports.display = function(request, response){
    response.send('<img src="4240affb981da1840f8391e820bfa034" />')
}
