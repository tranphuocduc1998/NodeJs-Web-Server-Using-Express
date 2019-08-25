const shortid = require('shortid')

const db = require('../db')

module.exports = function (request, response, next) {
    if (!request.signedCookies.sessionId) {
        db.set('sessions', []).write()
        var sessionId = shortid.generate()
        response.cookie('sessionId', sessionId, { signed: true })

        db.get('sessions').push({
            id: sessionId
        }).write()
    }
    next();
}