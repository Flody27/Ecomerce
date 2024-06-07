const orderModel = require("../models/order.model");

exports.getOrders = async (req, res) => {
  orderModel
    .find()
    .then((result) => {
      console.log("Listing orders.");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the orders.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the orders.",
      });
    });
};

exports.getOrderByID = async (req, res) => {
  orderModel
    .findById(req.params.id)
    .then((result) => {
      console.log("Listing order.");
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the order.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the order.",
      });
    });
};

exports.createOrder = async (req, res) => {
  const {
    customer,
    products,
    totalAmount,
    status,
    orderDate,
    shippingAddress,
    paymentMethod,
    transactionId,
    notes,
  } = req.body;

  const x = new orderModel({
    customer,
    products,
    totalAmount,
    status,
    orderDate,
    shippingAddress,
    paymentMethod,
    transactionId,
    notes,
  });

  x.save()
    .then(() => {
      console.log("Registering order.");
      res.send({ message: "Order successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the order.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the order.",
      });
    });
};

exports.editOrder = async (req, res) => {
  const {
    customer,
    products,
    totalAmount,
    status,
    orderDate,
    shippingAddress,
    paymentMethod,
    transactionId,
    notes,
  } = req.body;

  orderModel
    .findByIdAndUpdate(
      req.params.id,
      {
        customer,
        products,
        totalAmount,
        status,
        orderDate,
        shippingAddress,
        paymentMethod,
        transactionId,
        notes,
      },
      { new: true }
    )
    .then(() => {
      console.log("Updating order.");
      res.send({ message: "The order was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the order.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the order.",
      });
    });
};

exports.deleteOrder = async (req, res) => {
  orderModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the order.");
      res.send({ message: "The order was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the order.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the order.",
      });
    });
};
