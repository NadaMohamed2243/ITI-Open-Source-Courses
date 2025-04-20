const Post = require('../models/Post');
const AppError = require('../utils/AppError');

// get all posts
const GetAllPosts = async (req, res, next) => {
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

        if (!posts) {
            throw new AppError('No posts found', 404);
        }

        res.json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page)
        });
    } catch (err) {
        next(err);
    }
}


// get post by id
const GetPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'username')
            .populate('comments.author', 'username')
            .populate('likes', 'username')
            .exec();

        if (!post) {
            throw new AppError('Post not found', 404);
        }

        res.json(post);
    }
    catch (err) {
        next(err);
    }
}


// create post
const CreatePost = async (req, res, next) => {
    try {
        // res.send('create post')
        const { title, content, author, tags } = req.body;


        if (!title || !content) {
            throw new AppError('Title and content are required', 400);
        }


        const post = await Post.create({
            title,
            content,
            author : req.user._id, // assuming req.user is set by authentication middleware
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
}


// update post
const UpdatePost = async (req, res, next) => {
    try {
        const { title, content, tags } = req.body;

        // First find the post to check ownership
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            throw new AppError('Post not found', 404);
        }

        // Check if current user is the author or admin
        if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            throw new AppError('Not authorized to update this post', 403);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                tags: tags || [],  // Default to an empty array if no tags are provided
                updatedAt: Date.now()
            },
            { 
                new: true,    // Return the updated document
                runValidators: true // Ensure the update respects schema validations
            }
        ).populate('author', 'username'); // Populate author info

        if (!updatedPost) {  // Check if the post exists after updating
            throw new AppError('Post not found', 404);
        }

        res.json({
            message: 'Post updated successfully',
            post: updatedPost
        });
    } catch (err) {
        next(err);
    }
}


// delete post
const DeletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return next(new AppError('Post not found', 404));
        }

       // Check if current user is the author or admin
       if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        throw new AppError('Not authorized to delete this post', 403);
    }

    // Delete the post
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    res.json({
        message: 'Post deleted successfully',
        post: deletedPost
    });
    }
    catch (err) {
        next(err);
    }
}



// POST add a comment to a post
const AddCommentToPost = async (req, res, next) => {
    try {
        const { text, author } = req.body;

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { $push: { comments: { text, author: req.user._id } } },
            { new: true, runValidators: true }
        ).populate('comments.author', 'username');


        if (!post || post.length === 0) {
            throw new AppError('Post not found', 404);
        }

        res.status(201).json(post.comments);

        
    }
    catch (err) {
        next(err);
    }
}

// GET all posts by a specific user
const GetPostsByUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const posts = await Post.find({ author: userId })
            .populate('author', 'username')
            .populate('comments.author', 'username')
            .populate('likes', 'username')
            .exec();


        if (!posts || posts.length === 0) {
            throw new AppError('No posts found for this user', 404);
        }

        res.json(posts);
    }
    catch (err) {
        next(err);
    }
}


// POST like a post
const LikePost = async (req, res, next) => {
    try {
        // const userId = req.body.userId;
        const postId = req.params.id;
        // console.log(req.body)
        const post = await Post.findById(postId);


        if (!post || post.length === 0) {
            throw new AppError('Post not found', 404);
        }

        

        if (post.likes.includes(req.user._id)) {
            return res.status(400).json({ message: 'You have already liked this post' });
        }

        post.likes.push(req.user._id); // assuming req.user is set by authentication middleware
        await post.save();

        res.json({ message: 'Post liked successfully', likes: post.likes });
    }
    catch (err) {
        next(err);
    }
}


module.exports = {
    GetAllPosts,
    GetPostById ,
    CreatePost ,
    UpdatePost ,
    DeletePost ,
    AddCommentToPost ,
    GetPostsByUser,
    LikePost
}