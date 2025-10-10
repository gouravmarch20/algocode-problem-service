const User = require("../models/user.model");

class UserRepository {
  async createUser(data) {
    return await User.create(data);
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async getAllUsers() {
    return await User.find({}); // exclude password
  }
}

module.exports = UserRepository;
