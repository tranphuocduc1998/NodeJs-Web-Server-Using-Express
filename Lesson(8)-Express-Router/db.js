const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(8)-Express-Router/db.json')
const db = low(adapters)

// Set some defaults
db.defaults({ listed: [] }).write()

module.exports = db