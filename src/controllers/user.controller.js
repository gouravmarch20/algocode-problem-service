const UserService = require("../services/user.service");
const userService = new UserService();

class UserController {
  async signup(req, res) {
    try {
      const response = await userService.signup(req.body);
      res.status(201).json({
        success: true,
        data: response,
        message: "User created successfully",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async signin(req, res) {
    try {
      const response = await userService.signin(req.body);
      res.status(200).json({
        success: true,
        data: response,
        message: "Signed in successfully",
      });
    } catch (error) {
      res.status(401).json({ success: false, message: error.message });
    }
  }

  async listUsers(req, res) {
    try {
      const users = await userService.listUsers();
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new UserController();
