const express = require('Express')
const pug = require('pug')
const app = express()
const port = 8080

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function (request, response) {
    response.render('Index', {
        content: 'Đây là trang index',
        Url: '/Page'
    })
})

app.get('/Page', function (request, response) {
    response.render('Page/orthersPage', {
        listItem: [
            {id: 1, value: 'Giá trị 1'},
            {id: 2, value: 'Giá trị 2'},
            {id: 3, value: 'Giá trị 3'},
            {id: 4, value: 'Giá trị 4'},
            {id: 5, value: 'Giá trị 5'},
            {id: 6, value: 'Giá trị 6'},
            {id: 7, value: 'Giá trị 7'}
        ]
    })
})
app.listen(port, () => console.log('Listening to port:', port))

