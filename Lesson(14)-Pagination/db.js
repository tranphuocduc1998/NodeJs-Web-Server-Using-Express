const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(14)-Pagination/db.json')
const db = low(adapters)

// Set some defaults
db.defaults({ products: [] }).write()

module.exports = db