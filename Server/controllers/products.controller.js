const asyncHelper = require("../helpers/asyncHelper");
const customErrors = require("../helpers/customErrors");
const Product = require("../model/productsSchema");
const Images = require("../model/imagesSchema");

const pageSize = 6;

const addProducts = asyncHelper(async (req, res, next) => {
  const data = { ...req.body, soldBy: req.userToken };
  const product = await Product.findOne({ name: data.name });
  if (!product) {
    const addedProducts = await Product.create(data);
    await Product.cr;
    res.status(200).json({
      error: false,
      message: "Your product has been added Successfully",
      product: addedProducts,
    });
  } else {
    next(customErrors("Product already exists", 400));
  }
});

const getSingleProduct = asyncHelper(async (req, res, next) => {
  const id = req.query.pid;
  const product = await Product.findById({ _id: id });
  if (product) {
    const singleproduct = await Product.aggregate([
      {
        $match: { name: product.name },
      },
      {
        $lookup: {
          from: "images",
          localField: "name",
          foreignField: "productName",
          as: "images",
        },
      },
    ]);
    res
      .status(200)
      .json({ error: false, message: "product exists", singleproduct });
  } else {
    next(customErrors("This product does not exist", 400));
  }
});

const updateSingleProduct = asyncHelper(async (req, res, next) => {
  const id = req.query.pid;

  const updatedProduct = await Product.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (updatedProduct) {
    res.status(200).json({
      error: false,
      message: "Your Product has been successfully Updated",
      updatedProduct,
    });
  } else {
    next(customErrors("Product not found", 404));
  }
});

const allproductsofseller = asyncHelper(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const totalProductsCount = await Product.countDocuments({
    soldBy: req.userToken,
  });

  const sellerProducts = await Product.aggregate([
    {
      $match: { soldBy: req.userToken },
    },
    {
      $lookup: {
        from: "images",
        localField: "name",
        foreignField: "productName",
        as: "image",
      },
    },
    {
      $project: {
        id: 1,
        name: 1,
        description: 1,
        stock: 1,
        reviews: 1,
        company: 1,
        category: 1,
        colors: 1,
        price: 1,
        featured: 1,
        shipping: 1,
        image: { $arrayElemAt: ["$image.url", 0] },
        blurHash: { $arrayElemAt: ["$image.blurHash", 0] },
      },
    },
    { $skip: (page - 1) * pageSize },
    { $limit: pageSize },
  ]);

  const totalPages = Math.ceil(totalProductsCount / pageSize);

  res.status(200).json({
    products: sellerProducts,
    pagination: {
      currentPage: page,
      totalPages: totalPages,
      totalItems: totalProductsCount,
    },
  });
});

const allProducts = asyncHelper(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  let filterQuery = {};

  if (req.query.text) {
    filterQuery.name = { $regex: new RegExp(req.query.text, "i") };
  }

  if (req.query.category && req.query.category !== "all") {
    filterQuery.category = req.query.category;
  }

  if (req.query.company && req.query.company !== "all") {
    filterQuery.company = req.query.company;
  }

  if (req.query.color && req.query.color !== "all") {
    filterQuery.colors = { $elemMatch: { $eq: req.query.color } };
  }

  if (req.query.price) {
    filterQuery.price = { $lte: parseInt(req.query.price) };
  }

  let sortOption = {};
  if (req.query.sort === "a-z") {
    sortOption = { name: 1 }; // Ascending order of product names from a-z
  } else if (req.query.sort === "z-a") {
    sortOption = { name: -1 }; // Descending order of product names from z-a
  } else if (req.query.sort === "lowest") {
    sortOption = { price: 1 }; // Ascending order of products based on price
  } else if (req.query.sort === "highest") {
    sortOption = { price: -1 }; // Descending order of products based on price
  }

  const totalProductsCount = await Product.countDocuments(filterQuery);
  const products = await Product.aggregate([
    { $match: filterQuery },
    {
      $lookup: {
        from: "images",
        localField: "name",
        foreignField: "productName",
        as: "image",
      },
    },
    {
      $project: {
        id: 1,
        name: 1,
        description: 1,
        stock: 1,
        reviews: 1,
        company: 1,
        category: 1,
        colors: 1,
        price: 1,
        featured: 1,
        shipping: 1,
        image: { $arrayElemAt: ["$image.url", 0] },
        blurHash: { $arrayElemAt: ["$image.blurHash", 0] },
      },
    },
    req.query.sort ? { $sort: sortOption } : { $sort: { _id: 1 } },

    { $skip: (page - 1) * pageSize },
    { $limit: pageSize },
  ]);
  const featuredProducts = await Product.aggregate([
    {
      $match: { featured: true },
    },
    {
      $lookup: {
        from: "images",
        localField: "name",
        foreignField: "productName",
        as: "image",
      },
    },
    {
      $project: {
        id: 1,
        name: 1,
        description: 1,
        stock: 1,
        reviews: 1,
        company: 1,
        category: 1,
        colors: 1,
        price: 1,
        featured: 1,
        shipping: 1,
        image: { $arrayElemAt: ["$image.url", 0] },
        blurHash: { $arrayElemAt: ["$image.blurHash", 0] },
      },
    },
  ]);

  const totalPages = Math.ceil(totalProductsCount / pageSize);

  const priceStats = await Product.aggregate([
    {
      $group: {
        _id: null,
        maxPrice: { $max: "$price" },
        minPrice: { $min: "$price" },
      },
    },
  ]);

  const uniqueCompanies = await Product.distinct("company");
  const uniqueCategories = await Product.distinct("category");
  const uniqueColors = await Product.distinct("colors");
  // If priceStats is not empty, extract max and min prices
  const maxPrice = priceStats.length ? priceStats[0].maxPrice : 0;
  const minPrice = priceStats.length ? priceStats[0].minPrice : 0;

  res.status(200).json({
    products: products,
    featureProducts: featuredProducts,
    pagination: {
      currentPage: page,
      totalPages: totalPages,
      totalItems: totalProductsCount,
    },
    priceRange: { max: maxPrice, min: minPrice },
    uniqueValues: {
      companies: uniqueCompanies,
      categories: uniqueCategories,
      colors: uniqueColors.flat(),
    },
  });
});

const removeProduct = asyncHelper(async (req, res, next) => {
  const id = req.query.pid;
  const deleteProduct = await Product.findByIdAndDelete({ _id: id });

  await Images.deleteMany({
    productName: deleteProduct.name,
  });

  res.status(200).json("product deleted successfully");
});
module.exports = {
  removeProduct,
  addProducts,
  getSingleProduct,
  updateSingleProduct,
  allproductsofseller,
  allProducts,
};
