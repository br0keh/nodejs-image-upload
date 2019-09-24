
<h1> nodejs-image-upload</h1>


![version 1](https://img.shields.io/badge/version-1-brightgreen.svg?style=flat)


<i>start server</i>

    npm install express
    npm install morgan
    npm install multer

    node index.js



<i>api</i>

```json
POST /upload
 "file": fileInstance

{"success":true,"url":"http://localhost:8080/image/b695f0e051ff1ad36b82a83a95076529"}

```



<i>usage example</i>
   
```html
    <body>
	    <form  action="https://localhost:8080/upload"  method="post"  enctype="multipart/form-data">
	    Select image to upload:
		    <input  type="file"  name="fileToUpload"  id="fileToUpload">
		    <input  type="submit"  value="Upload Image"  name="submit">
	    </form>
    </body>
```
