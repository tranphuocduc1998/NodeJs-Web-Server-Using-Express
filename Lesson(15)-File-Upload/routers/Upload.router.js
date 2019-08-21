const express = require('Express')
const controller = require('../controllers/Upload.controller')
const multer  = require('multer')

var upload = multer({ dest: 'Lesson(15)-File-Upload/Assets/' })

const router = express.Router()

router.get('/', controller.getUpload)

router.post('/', upload.single('avatar'), controller.postUpload)

router.get('/picture', controller.display)
module.exports = router