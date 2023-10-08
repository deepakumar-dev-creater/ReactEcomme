import asycHander from "../middleware/asycHandler.js";
import Product from "../model/productModel.js";

// @desc Fetch all Products
// @route Get /api/products
// @access Public
const getAllProducts = asycHander(async (req, res) => {
  const product = await Product.find({});
  res.json(product);
  console.log("products!!");
});

// @desc Fetch the product by Id
// @route Get /api/products/:id
// @access Public
const getProductById = asycHander(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {getAllProducts,getProductById}