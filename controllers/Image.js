const fs = require('fs')
const filetype = require('file-type')

module.exports = (req, res) => {
let imagename = req.params.name
let imagepath = "tmp/" + imagename
fs.exists(imagepath, (e) => {
  if(e) {
    let image = fs.readFileSync(imagepath)
    res.writeHead(200, {'Content-Type': filetype(image).mime})
    res.end(image, 'binary')
  } else {
    res.send('404 - not found.');
  }
})
}
