import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const getProducts = await Product.find({});
    res.status(200).json(getProducts);
  } catch (error) {
    console.log("> Error in GET {products}\n", error);
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const getProduct = await Product.findById(id);
    res.status(200).json(getProduct);
  } catch (error) {
    console.log("> Error in GET {product}\n", error);
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const addProduct = async (req, res) => {
  //console.log(req.body);
  //res.send("=Data Recieved.", req.body);
  //res.status(200).send(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log("> Error in POST\n", error);
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body);
    if (!updateProduct) {
      return res.status(404).json({ mess: "Product not found." });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log("> Error in PUT\n", error);
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const deleteProduct = async (r, res) => {
  try {
    const { id } = r.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ [deleteProduct.name]: "Deleted." });
  } catch (error) {
    console.log("> Error in DELETE\n", error);
    res.status(500).json({
      msg: error.message,
    });
  }
};
