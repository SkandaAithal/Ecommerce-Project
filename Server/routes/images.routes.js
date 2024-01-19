const express = require("express");
const auth = require("../helpers/auth");
const router = express.Router();

const {
  imageUpload,
  getproductImages,
  removeProductImages,
} = require("../controllers/images.controller");

const upload = require("../helpers/multerHelper");

router.post("/imageupload", upload.array("images"), imageUpload);
router.get("/getimages", getproductImages);
router.delete("/removeimage", removeProductImages);
module.exports = router;
