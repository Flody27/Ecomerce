const refundModel = require("../models/refundRequest.model");

exports.getRefundRequests = async (req, res) => {
  refundModel
    .find()
    .then((result) => {
      console.log("Listing refund requests.");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the refund requests.", err);
      res.status(500).send({
        message:
          err.message || "There was an error getting the refund requests.",
      });
    });
};

exports.getRefundRequestByID = async (req, res) => {
  refundModel
    .findById(req.params.id)
    .then((result) => {
      console.log("Listing .");
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the refund request.", err);
      res.status(500).send({
        message:
          err.message || "There was an error getting the refund request.",
      });
    });
};

exports.createRefundRequest = async (req, res) => {
  const { customer, salesId, refundReason, status } = req.body;

  const x = new refundModel({ customer, salesId, refundReason, status });

  x.save()
    .then(() => {
      console.log("Registering .");
      res.send({ message: "Refund request successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the refund request.", err);
      res.status(500).send({
        message:
          err.message || "There was an error registering the refund request.",
      });
    });
};

exports.editRefundRequest = async (req, res) => {
  const { customer, salesId, refundReason, status } = req.body;

  refundModel
    .findByIdAndUpdate(
      req.params.id,
      { customer, salesId, refundReason, status },
      { new: true }
    )
    .then(() => {
      console.log("Updating .");
      res.send({ message: "The refund request was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the refund request.", err);
      res.status(500).send({
        message:
          err.message || "There was an error updating the refund request.",
      });
    });
};

exports.deleteRefundRequest = async (req, res) => {
  refundModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the .");
      res.send({ message: "The  was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the refund request.", err);
      res.status(500).send({
        message:
          err.message || "There was an error deleting the refund request.",
      });
    });
};
