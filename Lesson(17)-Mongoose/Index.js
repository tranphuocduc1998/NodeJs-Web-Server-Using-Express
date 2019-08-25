const express = require('Express')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const routerIndex = require('./routers/Index.router')
const routerLogin = require('./routers/Login.router')
const routerProduct = require('./routers/product.router')
const routerCart = require('./routers/Cart.router')

const sessionMiddleware = require('./middleware/Session.middleware')

const app = express()
const port = 9080

app.set('view engine', 'pug')
app.set('views', './Lesson(17)-Mongoose/views')


//Static file
app.use(express.static('Lesson(17)-Mongoose/Assets'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser('keyLock'))
app.use(sessionMiddleware)

app.use('',routerIndex)
app.use('/Login', routerLogin)
app.use('/Product', routerProduct)
app.use('/Cart', routerCart)

app.listen(port, () => console.log('Listening to port:', port))

 