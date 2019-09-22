
# nodejs-image-upload

start server

    npm install express
    npm install morgan
    npm install multer

    node index.js

api test

```html
    <body>
	    <form  action="https://localhost:8080/upload"  method="post"  enctype="multipart/form-data">
	    Select image to upload:
		    <input  type="file"  name="fileToUpload"  id="fileToUpload">
		    <input  type="submit"  value="Upload Image"  name="submit">
	    </form>
    </body>
```

responses

```json

valid file
POST /upload
{"success":true,"url":"http://localhost:8080/image/b695f0e051ff1ad36b82a83a95076529"}

invalid file
POST /upload
{"success":false,"message":""}

```
