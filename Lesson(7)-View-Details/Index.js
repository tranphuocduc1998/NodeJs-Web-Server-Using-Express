const express = require('Express')
const pug = require('pug')
const bodyParser = require('body-parser')
const low = require('lowdb')
const shortid = require('shortid')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(7)-View-Details/db.json')
const db = low(adapters)
const app = express()
const port = 9080

app.set('view engine', 'pug')
app.set('views', './Lesson(7)-View-Details/views')

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
    response.render('AddValues')
})

app.post('/Additional', function (request, response) {
    request.body.id = shortid.generate();
    db.get('listed').push(request.body).write()
    response.redirect('/')
})

app.get('/ViewDetails/:id', function (request, response) {
    const id = request.params.id
    const details= db.get('listed').find({ id: id}).value()
    response.render('ViewDetails', {info: details})
})

app.listen(port, () => console.log('Listening to port:', port))

