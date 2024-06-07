const salesModel = require("../models/sales.model");

exports.getSales = async (req, res) => {
  salesModel
    .find()
    .then((result) => {
      console.log("Listing the sales.");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the sales.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the sales.",
      });
    });
};

exports.getSaleByID = async (req, res) => {
  salesModel
    .findById(req.params.id)
    .then((result) => {
      console.log("Listing sale.");
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the sale.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the sale.",
      });
    });
};

exports.registerSale = async (req, res) => {
  const {
    orderId,
    customer,
    products,
    totalAmount,
    discount,
    saleDate,
    paymentMethod,
    transactionId,
    status,
    notes,
  } = req.body;

  const x = new salesModel({
    orderId,
    customer,
    products,
    totalAmount,
    discount,
    saleDate,
    paymentMethod,
    transactionId,
    status,
    notes,
  });

  x.save()
    .then(() => {
      console.log("Registering sale.");
      res.send({ message: "Sale successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the sale.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the sale.",
      });
    });
};

exports.editSale = async (req, res) => {
  const {
    orderId,
    customer,
    products,
    totalAmount,
    discount,
    saleDate,
    paymentMethod,
    transactionId,
    status,
    notes,
  } = req.body;

  salesModel
    .findByIdAndUpdate(
      req.params.id,
      {
        orderId,
        customer,
        products,
        totalAmount,
        discount,
        saleDate,
        paymentMethod,
        transactionId,
        status,
        notes,
      },
      { new: true }
    )
    .then(() => {
      console.log("Updating the sale.");
      res.send({ message: "The sale was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the sale.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the sale.",
      });
    });
};

exports.deleteSale = async (req, res) => {
  salesModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the sale.");
      res.send({ message: "The sale was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the sale.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the sale.",
      });
    });
};
