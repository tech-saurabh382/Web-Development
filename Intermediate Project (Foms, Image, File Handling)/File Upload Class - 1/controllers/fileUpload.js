const File = require("../models/File");

// localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
    try {
        // fetch file from request 
        const file = req.files.file;
        console.log("FILE AAGYI JEE -> ", file);

        // create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH-> ", path);

        // add path to the move function 
        file.mv(path, (err) => {
            console.log(err);
        });

        // create a successful response
        res.json({
            success: true,
            message: "Local File Uploaded Successflly",
        })
    }
    catch (error) {
        console.log("Not able to upload the file on server");
        console.log(error);
    }
}