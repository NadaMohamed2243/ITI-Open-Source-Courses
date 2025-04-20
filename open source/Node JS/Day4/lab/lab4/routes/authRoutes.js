const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/validation');


// LOGIN
router.post('/login', validateLogin,authController.Login);

// REGISTER
router.post('/register', validateRegister,authController.Register);


module.exports = router;