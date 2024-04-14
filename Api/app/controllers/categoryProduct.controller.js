const CategoryModel = require("../models/categoryProduct.model");

exports.getCategories = async (req, res) => {
  CategoryModel.find()
    .then((result) => {
      console.log("Listing cateogries.");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the cateogries.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the cateogries.",
      });
    });
};

exports.createCategory = async (req, res) => {
  const { category } = req.body;

  const Product = new CategoryModel({
    category,
  });

  Product.save()
    .then(() => {
      console.log("Registering category.");
      res.send({ message: "Category successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the category.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the category.",
      });
    });
};

exports.editCategory = async (req, res) => {
  const { category } = req.body;

  CategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      category,
    },
    { new: true }
  )
    .then(() => {
      console.log("Updating category.");
      res.send({ message: "The category was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the category.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the category.",
      });
    });
};

exports.deleteCategory = async (req, res) => {
  CategoryModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the category.");
      res.send({ message: "The category was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the category.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the category.",
      });
    });
};
