require('dotenv').config()
console.log(process.env.SESSION_SECRECT)
const express = require('Express')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const router = require('./routers/Location.router')
const routerLogin = require('./routers/Login.router')

const app = express()
const port = 9080

app.set('view engine', 'pug')
app.set('views', './Lesson(13)-Page-Login/views')


//Static file
app.use(express.static('Lesson(13)-Page-Login/Assets'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser(process.env.SESSION_SECRECT))

app.use('',router)
app.use('/Login/', routerLogin)


app.listen(port, () => console.log('Listening to port:', port))

 