

const multer = require('multer')
const path = require('path');

module.exports = multer({
  dest: 'tmp/',
  fileFilter: (req, file, cb) => {
    if(path.extname(file.originalname) === ".png" |
       path.extname(file.originalname) === ".jpg" | 
       path.extname(file.originalname) === ".jpeg" )
      {
        return cb(null, true)
      }else{
        return cb(JSON.stringify({"success": false, "message": "Este arquivo não é uma imagem"}), false);
      }
  }

})
