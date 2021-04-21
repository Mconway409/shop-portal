const db = require('../models/addressModel');

// Defining methods for the postsController for addressModel
module.exports = {
  findAll: function (req, res) {
    db.find(req.query)
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById({ _id: req.params.id})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    db.find({ user: req.params.user})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createAddress = new db({
      user: req.body.user,
      streetAddress: req.body.streetAddress,
      streetAddress2: req.body.streetAddress2,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zipCode: req.body.zipCode,
      isDefault: req.body.isDefault,
      isActive: req.body.isActive,
      updated: req.body.updated,
      created: req.body.created,
    });

    db.create(createAddress)
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
