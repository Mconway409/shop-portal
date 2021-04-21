const db = require('../models/merchantModel');

// Defining methods for the postsController merchant
module.exports = {
  findAll: function (req, res) {
    db.find(req.query)
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.findOne({ email: req.parmas.email })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByPhoneNumber: function (req, res) {
    db.findOne({ phoneNumber: req.parmas.phoneNumber })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createMerchant = new db({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      description: req.body.description,
      status: req.body.status,
      isActive: req.body.isActive,
      created: req.body.created,
      updated: req.body.updated,
    });

    db.create(createMerchant)
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
