const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(10)-Template-Layout/db.json')
const db = low(adapters)

// Set some defaults
db.defaults({ listed: [] }).write()

module.exports = db