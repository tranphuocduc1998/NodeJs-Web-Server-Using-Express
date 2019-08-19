const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(12)-Server-side-Validation/db.json')
const db = low(adapters)

// Set some defaults
db.defaults({ infoContact: [] }).write()

module.exports = db