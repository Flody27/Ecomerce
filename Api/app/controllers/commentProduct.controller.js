const CommentProductModel = require("../models/commentProduct.model");

exports.createProductComment = async (req, res) => {
  const { comment, date, raiting, author, product_id } = req.body;

  const Comment = new CommentProductModel({
    comment,
    date,
    raiting,
    author,
    product_id,
  });

  Comment.save()
    .then(() => {
      console.log("Registering the comment.");
      res.send({ message: "Comment successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the comment.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the comment.",
      });
    });
};

exports.editProductComment = async (req, res) => {
  const { comment, date, raiting, author, product_id } = req.body;

  CommentProductModel.findByIdAndUpdate(
    req.params.id,
    {
      comment,
      date,
      raiting,
      author,
      product_id,
    },
    { new: true }
  )
    .then(() => {
      console.log("Updating comment.");
      res.send({ message: "The comment was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the comment.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the comment.",
      });
    });
};

exports.deleteProductComment = async (req, res) => {
  CommentProductModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the comment.");
      res.send({ message: "The comment was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the comment.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the comment.",
      });
    });
};
