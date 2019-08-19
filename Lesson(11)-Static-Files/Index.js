const express = require('Express')
const pug = require('pug')
const router = require('./routers/Location.router')

const app = express()
const port = 9080

app.set('view engine', 'pug')
app.set('views', './Lesson(11)-Static-Files/views')

//Static file
app.use(express.static('Lesson(11)-Static-Files/Assets'))

// Routers
app.use('', router)



app.listen(port, () => console.log('Listening to port:', port))

