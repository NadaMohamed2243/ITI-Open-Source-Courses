const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {authenticate , authorize} = require('../middleware/auth');
const { validateUpdateUser } = require('../middleware/validation');
router.use(authenticate); // apply authentication middleware to all routes

// get current user
router.get('/me',authenticate, userController.GetCurrentUser);
router.put('/me',authenticate, validateUpdateUser, userController.UpdateUser);


// apply authorization middleware to all routes below this line 
router.use(authorize(['admin']));

//only admin can access these routes
// get all users
router.get('/', userController.GetAllUsers);

// get user by id
router.get('/:id', userController.GetUserById);

// update user
router.put('/:id', authenticate,userController.UpdateUser);

// delete user
router.delete('/:id',authenticate,userController.DeleteUser);



module.exports = router;