const Users = require('./user');

module.exports.getById = (paramsId) => Users.findById({"_id": paramsId});
  
module.exports.add = function (data) {
    let User = new Users({
        login: data.login,
        email: data.email,
        password: data.password
    });
  
    return User.save();
  };
  
