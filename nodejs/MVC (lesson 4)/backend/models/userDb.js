const mongoose = require('mongoose');
const User = require('./userSchema');

module.exports.getUsers = function () {
    return User.find();
}

module.exports.postUserToDb = function (data) {
    let newUser = User({
        name: data.name,
        username: data.username,
        password: data.password,
        admin: true,
    })
    return newUser.save();
}

module.exports.findForUsername = function (name) {
    return User.find({username: name});
}

module.exports.deleteUserFromDb = function (id) {
    return User.findByIdAndRemove(id);
}

module.exports.updateUserToDb = function (id, objForUpdate) {
    return User.findByIdAndUpdate(id, objForUpdate);
}