const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(13)-Page-Login/db.json')
const db = low(adapters)

// Set some defaults
db.defaults({ infoContact: [] }).write()

module.exports = db