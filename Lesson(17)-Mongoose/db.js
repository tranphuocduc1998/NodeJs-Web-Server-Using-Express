const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('Lesson(16)-Session/db.json')
const db = low(adapters)

// Set some defaults
db.defaults({sessions: []}).write()

module.exports = db