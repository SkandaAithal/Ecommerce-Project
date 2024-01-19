const asyncHelper = require("../helpers/asyncHelper");
const Images = require("../model/imagesSchema");
const sharp = require("sharp");
const { encode } = require("blurhash");
const path = require("path");
const customErrors = require("../helpers/customErrors");

// Function to generate Blurhash for an image buffer
const generateBlurhash = async (imageBuffer) => {
  return new Promise((resolve, reject) => {
    sharp(imageBuffer)
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: "inside" })
      .toBuffer((err, buffer, { width, height }) => {
        if (err) {
          reject(err);
        } else {
          resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
        }
      });
  });
};

const imageUpload = async (req, res, next) => {
  try {
    const imagesPromises = [];

    for (const file of req.files) {
      const imageMetadata = await sharp(file.path).metadata();

      let width, height;

      // Check if height is greater than width
      if (imageMetadata.height > imageMetadata.width) {
        height = 800;
        width = null;
      } else {
        width = 500;
        height = null;
      }

      const compressedImageBuffer = await sharp(file.path)
        .resize(width, height)
        .jpeg({ quality: 95, force: false, chromaSubsampling: "4:4:4" })
        .toBuffer();
      const compressedImagePath = path.join(
        "uploads/",
        `${file.originalname}_compressed.jpg`
      );
      const blurHashurl = await generateBlurhash(compressedImageBuffer);

      await sharp(compressedImageBuffer).toFile(compressedImagePath);
      const saveImage = new Images({
        productName: req.body.name,
        blurHash: blurHashurl,
        url: `${file.originalname}_compressed.jpg`,
      });

      imagesPromises.push(saveImage.save());
    }

    await Promise.all(imagesPromises);

    res.send("Images saved successfully");
  } catch (err) {
    res.status(500).send("Error saving images");
  }
};

const getproductImages = asyncHelper(async (req, res, next) => {
  const productName = req.query.productName;
  const images = await Images.find({ productName });
  res.json(images);
});

const removeProductImages = asyncHelper(async (req, res, next) => {
  const id = req.query.pid;
  const deletedImage = await Images.findByIdAndDelete({ _id: id });

  if (deletedImage) {
    res
      .status(200)
      .json({ error: false, message: "Image deleted successfully" });
  } else {
    next(customErrors("Image doesnt exist", 400));
  }
});

module.exports = { imageUpload, getproductImages, removeProductImages };
