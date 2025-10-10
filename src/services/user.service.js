const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/user.repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup({ username, password, imageUrl }) {
    const existingUser = await this.userRepository.findByUsername(username);
    if (existingUser) {
      throw new Error("Username already taken");
    }


    const newUser = await this.userRepository.createUser({
      username,
      password,
      imageUrl,
    });

    const token = this._generateToken(newUser);
    return { user: newUser, token };
  }

  async signin({ username, password }) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new Error("User not found");

    const isMatch = password === user.password
    if (!isMatch) throw new Error("Invalid credentials");

    const token = this._generateToken(user);
    return { user, token };
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }

  _generateToken(user) {
    return jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET || "supersecret",
      { expiresIn: "7d" }
    );
  }
}

module.exports = UserService;
