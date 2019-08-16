//Cấu trúc bắt đầu Express
const express = require('Express')
const app = express()
const port = 8080

//Phương thức(method) get của Express
app.get('/', function(request, response){
    response.send('Hello World!')
})

app.listen(port,()=> console.log('Listening to port:',port))

