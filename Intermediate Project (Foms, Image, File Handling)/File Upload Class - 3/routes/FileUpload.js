const express = require('express');
const router = express.Router();

const { localFileUpload, imageUpload, videoUpload, imageSizedReducer } = require("../controllers/fileUpload");

// api route
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizedReducer", imageSizedReducer);

module.exports = router;