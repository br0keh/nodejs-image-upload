const routes = require('express').Router();


const UploadController = require('./controllers/Upload')

const Uploader = UploadController.single('file');

routes.post('/upload', Uploader, (req, res) => {
  
  res.json({'success': true, 'url': 'http://localhost:8080/image/'+req.file.filename });

})



routes.get('/image/:name', (req, res) => { 
  
  const ImageController = require('./controllers/Image')
  ImageController(req, res);

})

module.exports = routes;