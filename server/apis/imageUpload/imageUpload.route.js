const express = require('express');
const ImageUploadCtrl = require('./imageUpload.controller');
const auth = require('../../../middleware/checkAuthentication');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './ImageUpload/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage
});


const router = express.Router();

router.route('/')
    .get(auth, ImageUploadCtrl.getImageData)
    .post(auth, upload.array('img_Collection', 6), ImageUploadCtrl.getMultipleImage)


module.exports = router;