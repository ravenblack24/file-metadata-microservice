const getFileMetadata = (req, res) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.json({"error": "No file uploaded"});
    }

    const file = req.files.fileUpload;
    return res.json({"name": file.name,
                     "type": file.mimetype,
                     "size": file.size})
}

module.exports = {getFileMetadata}