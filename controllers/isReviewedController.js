const db = require('../models/isReviewedModel');

// Defining methods for the postsController isReviewed

module.exports = {
  findAll: function (req, res) {
    db.find(req.query)
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByTotalStars: function (req, res) {
    db.findOne({ total: 'totalStars' })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createReview = new db({
      name: req.body.name,
      product: req.body.product,
      imageUrl: req.body.imageUrl,
      imageKey: req.body.imageKey,
      title: req.body.title,
      description: req.body.description,
      totalStars: req.body.totalStars,
      reviewBody: req.body.reviewBody,
      isActive: req.body.isActive,
      isReviewable: req.body.isReviewable,
      created: req.body.created,
      updated: req.body.updated,
    });
    db.create(createReview)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
