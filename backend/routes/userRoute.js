// const express = require('express');
// const router = express.Router();
// const UserController = require('../controller/userController');

// // User signup route
// router.post('/signup', UserController.signup);

// // User login route
// router.post('/login', UserController.login);

// // Change user status by ID route
// // Note: This route is protected and requires a valid token
// // router.put('/change/:id', UserController.authenticateToken, UserController.changeById);

// module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

// User signup route
router.post('/signup', UserController.signup);

// User login route
router.post('/login', UserController.login);

// Uncomment and modify the following route if you need to add the `changeById` function in the future
// router.put('/change/:id', UserController.authenticateToken, UserController.changeById);

module.exports = router;
