const express = require('Express')
const pug = require('pug')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(6)-Database(lowdb)/db.json')
const db = low(adapters)
const app = express()
const port = 9080

app.set('view engine', 'pug')
app.set('views', './Lesson(6)-Database(lowdb)/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// Set some defaults
db.defaults({ listed: [] }).write()


app.get('/', function (request, response) {
    response.render('TestSearch', {
        listItem: db.get('listed').value()
    })
})

app.get('/Search', function (request, response) {
    const contentSearch = request.query.contentSearch
    const listSearched = db.get('listed').value().filter(function (item) {
        return item.value.toLowerCase().indexOf(contentSearch.toLowerCase()) !== -1
    })
    response.render('TestSearch', {
        listItem: listSearched
    })
})

app.get('/Additional', function (request, response) {
    console.log(db.get('listed').value().length )
    response.render('AddValues', {
        idList: (db.get('listed').value().length + 1)
    })
})

app.post('/Additional', function (request, response) {
    db.get('listed').push(request.body).write()
    response.redirect('/')
})


app.listen(port, () => console.log('Listening to port:', port))

