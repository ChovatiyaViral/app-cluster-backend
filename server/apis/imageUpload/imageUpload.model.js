const mongoose = require('mongoose');

const ImageUploadSchema = new mongoose.Schema({
    img_collection: {
        type: Array
    }
});

module.exports = mongoose.model('ImageUpload', ImageUploadSchema);