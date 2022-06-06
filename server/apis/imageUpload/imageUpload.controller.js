const ImageUpload = require('./imageUpload.model');
const browseURL = `http://localhost:${process.env.PORT}/`;

const getMultipleImage = async (req, res, next) => {
    try {
        const images = req.files

        const imagesWithName = images.map(item => item.originalname)


        const findData = await ImageUpload.find();

        if (findData.length === 0) {
            const imageUploadData = new ImageUpload({
                img_collection: imagesWithName
            });
            const imageData = await imageUploadData.save(); s
        }

        if (findData.length !== 0) {
            ImageUpload.findByIdAndUpdate(findData[0]._id, {
                $push: {
                    "img_collection": { $each: imagesWithName }
                }
            }, (err) => {
                if (err) {
                    res.status(400).send({ error: "Data Is Not Updated" });
                }
            });
        }
        const url = imagesWithName.map(item => browseURL + item)

        res.status(200).send(url);


    } catch (err) {
        next(err);
    }
};

const getImageData = async (req, res, next) => {
    try {
        const findData = await ImageUpload.find();
        if (findData.length !== 0) {
            const url = findData[0].img_collection.map(item => browseURL + item)
            res.status(200).send(url);
        } else {
            res.status(400).send("data not avialable");
        }

    } catch (err) {
        next(err);
    }
}


module.exports = {
    getMultipleImage,
    getImageData
}