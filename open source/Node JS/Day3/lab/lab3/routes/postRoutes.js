const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
// get all posts
router.get('/', async (req, res, next) => {

    try {
        const { page = 1, limit = 10, search, sortBy = 'createdAt', sortOrder = 'desc' } = req.query;

        let query = {};
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } }
            ];
        }

        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

        const posts = await Post.find(query)
            .populate('author', 'username')
            .populate('comments.author', 'username')
            .populate('likes', 'username')
            .sort(sortOptions)
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit))
            .exec();

        const count = await Post.countDocuments(query);

        res.json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page)
        });
    } catch (err) {
        next(err);
    }
})

// get post by id
router.get('/:id', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'username')
            .populate('comments.author', 'username')
            .populate('likes', 'username')
            .exec();

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(post);
    }
    catch (err) {
        next(err);
    }
})
// create post
router.post('/', async (req, res, next) => {
    try {
        // res.send('create post')
        const { title, content, author, tags } = req.body;
        const post = await Post.create({
            title,
            content,
            author,
            tags: tags || [],
            comments: [],
        });
        res.status(201).json({
            message: 'Post created successfully',
            post
        });
    }
    catch (err) {
        next(err);
    }
})

// update post
router.put('/:id', async (req, res, next) => {
    try {
        const { title, content, tags } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id, {
            title,
            content,
            tags: tags || [],
        }, { new: true, runValidators: true });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json({
            message: 'Post updated successfully',
            post
        });
    }
    catch (err) {
        next(err);
    }
})
// delete post
router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json({
            message: 'Post deleted successfully',
            post
        });
    }
    catch (err) {
        next(err);
    }
})

// POST add a comment to a post
router.post('/:id/comments', async (req, res, next) => {
    try {
        const { text, author } = req.body;

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { $push: { comments: { text, author } } },
            { new: true, runValidators: true }
        ).populate('comments.author', 'username');

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(201).json(post.comments);
    }
    catch (err) {
        next(err);
    }
});

// GET all posts by a specific user
router.get('/user/:userId', async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const posts = await Post.find({ author: userId })
            .populate('author', 'username')
            .populate('comments.author', 'username')
            .populate('likes', 'username')
            .exec();

        if (!posts) {
            return res.status(404).json({ message: 'No posts found for this user' });
        }

        res.json(posts);
    }
    catch (err) {
        next(err);
    }
});

// POST like a post
router.post('/:id/like', async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const postId = req.params.id;
console.log(req.body)
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: 'You have already liked this post' });
        }

        post.likes.push(userId);
        await post.save();

        res.json({ message: 'Post liked successfully', likes: post.likes });
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;