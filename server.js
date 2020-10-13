// Init project
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const {getFileMetadata} = require('./src');

const app = express();

// Serve static resources from public dir
app.use(express.static(__dirname+"/public"));
app.use(cors());

// Parse URL-encoded bodies
app.use(express.urlencoded({extended:false}));
// Enable file upload
app.use(fileUpload({
    createParentPath: true
}));

// Route for index page
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
});

/**
 * Process file upload and return Object
 * 
 * @param {Request} req the request containing a file upload
 * 
 * @returns {Object} Object containing error key value pair or file metadata
 */
app.post("/api/fileanalyse", (req, res) => {
    getFileMetadata(req, res);
});

const port = process.env.PORT || 3000;

// Listen for requests
var listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});