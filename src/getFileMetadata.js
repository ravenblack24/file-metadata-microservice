
/**
 * Process file uploaded in the POST request
 * 
 * @param {Request}  req  the file uploaded in the request
 * @param {Response} res  the response to the request
 * 
 * @returns {String} 
 * 
 */
const getFileMetadata = (req, res) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.json({"error": "No file uploaded"});
    }

    const file = req.files.upfile;
    return res.json({"name": file.name,
                     "type": file.mimetype,
                     "size": file.size})
}

module.exports = {getFileMetadata}