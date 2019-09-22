const routes = require('express').Router();
const App = require("./App/main");
const multer = require('multer')

const upload = multer({
  dest: 'tmp/',

})

routes.post('/upload', upload.single('fileToUpload'), (req, res) => {
  res.send(req.file)
})

routes.get('/image/:name', (req, res) => {
  res.send(req.params.name)
})

module.exports = routes;