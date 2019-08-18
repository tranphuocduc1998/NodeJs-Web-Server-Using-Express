const express = require('Express')
const pug = require('pug')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./routers/Location.router')

const app = express()
const port = 9080

app.set('view engine', 'pug')
app.set('views', './Lesson(9)-Structure-MVC-Model/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('', router)



app.listen(port, () => console.log('Listening to port:', port))

