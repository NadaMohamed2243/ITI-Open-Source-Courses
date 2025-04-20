const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { authenticate } = require('../middleware/auth');
const { 
    validateCreatePost, 
    validateUpdatePost,
    validateComment 
} = require('../middleware/validation');


// apply authentication middleware to all routes
router.use(authenticate);
// get all posts
router.get('/', postsController.GetAllPosts);

// get post by id
router.get('/:id', postsController.GetPostById);

// create post 
// validateCreatePost middleware will validate the request body
router.post('/', validateCreatePost, postsController.CreatePost);

// update post
// validateUpdatePost middleware will validate the request body
router.put('/:id',validateUpdatePost, postsController.UpdatePost);

// delete post
router.delete('/:id', postsController.DeletePost);

// POST add a comment to a post
// validateComment middleware will validate the request body
router.post('/:id/comments', validateComment , postsController.AddCommentToPost);

// GET all posts by a specific user
router.get('/user/:userId', postsController.GetPostsByUser);

// POST like a post
router.post('/:id/like', postsController.LikePost);


module.exports = router;