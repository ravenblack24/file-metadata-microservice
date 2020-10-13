const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const {getFileMetadata} = require('./src');

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(fileUpload({
    createParentPath: true
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
});

app.post("/upload", (req, res) => {
    getFileMetadata(req, res);
});

const port = process.env.PORT || 3000;

var listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});