const express = require("express");
const {
  addProducts,
  getSingleProduct,
  updateSingleProduct,
  allproductsofseller,
  allProducts,
  removeProduct,
} = require("../controllers/products.controller");
const auth = require("../helpers/auth");
const router = express.Router();
router.post("/addproduct", auth, addProducts);
router.get("/singleproduct", getSingleProduct);
router.put("/updateproduct", auth, updateSingleProduct);
router.get("/getallproducts", auth, allproductsofseller);
router.get("/allproducts", allProducts);
router.delete("/removeproduct", removeProduct);
module.exports = router;
