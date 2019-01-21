const database = require('../models/database');

module.exports.getUser = function (req, res) {
database
    .getById(req.params.id)
    .then((results) => {
      if (results) {
        res.json(results);
      } else {
        res
          .status(400)
          .json({err: 'User not found'});
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};

module.exports.addUser = function (req, res) {
  database
    .add(req.body)
    .then((results) => {
      res
        .status(201)
        .json(results);        
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};

