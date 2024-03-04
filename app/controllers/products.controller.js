const ProductModel = require("../models/product.model");

exports.getProducts = async (res) => {
  ProductModel.find()
    .then((result) => {
      console.log("Listing products");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the products", err);
      res.status(500).send({
        message: err.message || "There was an error getting the products",
      });
    });
};

exports.getProductByID = async (req, res) => {
  ProductModel.findById(req.params.id)
    .then((result) => {
      console.log("Listing product");
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the product", err);
      res.status(500).send({
        message: err.message || "There was an error getting the product",
      });
    });
};

exports.createProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    discount,
    brand,
    category,
    quantity,
    images,
    tags,
    favorites,
    ratings,
  } = req.body;

  const Product = new ProductModel({
    name,
    description,
    price,
    discount,
    brand,
    category,
    quantity,
    images,
    tags,
    favorites,
    ratings,
  });

  Product.save()
    .then(() => {
      console.log("Registering product");
      res.send({ message: "Product successfully registered" });
    })
    .catch((err) => {
      console.log("There was an error registering the product", err);
      res.status(500).send({
        message: err.message || "There was an error registering the product",
      });
    });
};

exports.editProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    discount,
    brand,
    category,
    quantity,
    images,
    tags,
    favorites,
    ratings,
  } = req.body;

  ProductModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      price,
      discount,
      brand,
      category,
      quantity,
      images,
      tags,
      favorites,
      ratings,
    },
    { new: true }
  )
    .then(() => {
      console.log("Updating product");
      res.send({ message: "The product was successfully updated" });
    })
    .catch((err) => {
      console.log("There was an error updating the product", err);
      res.status(500).send({
        message: err.message || "There was an error updating the product",
      });
    });
};

exports.deleteProduct = async (req, res) => {
  ProductModel.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log("deleting the product");
      res.send({ message: "The product was successfully deleted" });
    })
    .catch((err) => {
      console.log("There was an error deleting the product", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the product",
      });
    });
};
