const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

// User signup
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if email already exists
    let existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create new user
    const newUser = new UserModel({ email, password });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, "your_jwt_secret", { expiresIn: "1h" });

    res.status(201).json({
      status: true,
      message: "Signup successfully completed",
      data: { token, user: newUser },
    });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Failed to signup" });
  }
};

// User login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: "1h" });

    res.status(200).json({
      status: true,
      message: "Login successfully",
      data: { token, user },
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Failed to login" });
  }
};

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = {
  signup,
  login,
  authenticateToken,
};
