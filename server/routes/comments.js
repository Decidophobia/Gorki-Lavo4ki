const router = require('express').Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');


// add comment
router.post('/addComment', async (req, res) => {
	try {
		const comment = new Comment({user: req.body.user, text: req.body.comment});
		await comment.save();
		const commentToPost = Post.findOne({id: post.id});
		commentToPost.comments.push(comment.id);
		commentToPost.save();
		res.status(200).json('Comment has been created!');
	} catch (err) {
		res.status(400).json('Error!');
	}
});

// get comments
router.get('/getComments', async (req, res) => {
	try {
		const commentsPost = Post.find({id: post.id});
		res.status(200).json(commentsPost.comments);
	} catch (err) {
		res.status(400).json('Error!');
	}
});

module.exports = router;
