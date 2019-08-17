const express = require('Express')
const pug = require('pug')
const bodyParser = require('body-parser')

const app = express()
const port = 8080

const listed = [
    { id: 1, value: 'Duc' },
    { id: 2, value: 'Tuan' },
    { id: 3, value: 'Thanh' },
    { id: 4, value: 'Tam' },
    { id: 5, value: 'Hiep' },
    { id: 6, value: 'Vui' },
    { id: 7, value: 'Loi' }
]

app.set('view engine', 'pug')
app.set('views', './Lesson(5)-Use-Npm-Nodemon/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', function (request, response) {
    response.render('TestSearch', {
        listItem: listed
    })
})

app.get('/Search', function (request, response) {
    const contentSearch = request.query.contentSearch
    const listSearched = listed.filter(function (item) {
        return item.value.toLowerCase().indexOf(contentSearch.toLowerCase()) !== -1
    })
    response.render('TestSearch', {
        listItem: listSearched
    })
})

app.get('/Additional', function (request, response) {
    response.render('AddValues', {
        idList: (listed.length + 1)
    })
})

app.post('/Additional', function (request, response) {
    listed.push({id:request.body.newId, value: request.body.values})
    response.redirect('/')
})


app.listen(port, () => console.log('Listening to port:', port))

