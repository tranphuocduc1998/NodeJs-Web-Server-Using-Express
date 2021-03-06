const express = require('Express')

const routerProduct = require('./routers/product.router')

const app = express()
const port = 9080

//set views engines
app.set('view engine', 'pug')
app.set('views', './Lesson(14)-Pagination/views')

//use views
app.use('', routerProduct)

//use static files (.css,...)
app.use(express.static('Lesson(14)-Pagination/Assets'))


app.listen(port,()=>console.log('Listening to port:', port))