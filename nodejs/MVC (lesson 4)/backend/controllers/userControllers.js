const db = require('../models/userDb');

module.exports.getAllUsers = (req, res) => {
    db
    .getUsers()
    .then (data => {
        res.json(data)
    })
    .catch((err) =>{
        res
        .status(400)
        .json({err: err.message});
    })
};

module.exports.postUser = (req, res) => {
    db
    .postUserToDb(req.body)
    .then((results) => {
      res
        .status(201)
        .json(`User created! ${results}`);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.getUserByUsername = (req, res) => {
    db
    .findForUsername(req.params.username)
    .then (data => {
        res.json(data)
    })
    .catch((err) =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.deleteUser = (req, res) => {
    db
    .deleteUserFromDb(req.params.id)
    .then (data => {
        res.json(200, 'User deleted!')
    })
    .catch((err) =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.updateUser = (req, res) => {
    db
    .updateUserToDb(req.params._id, { username: req.body.username, password: req.body.password})
    .then (data => {
        res.json(200, 'User update!')
    })
    .catch((err) =>{
        res
        .status(400)
        .json({err: err.message});
    })
}