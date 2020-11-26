const router = require('express').Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');


// add comment
router.post('/addComment', async (req, res) => {
	// console.log(req.body);
	try {
		const comment = new Comment({user: req.body.user, text: req.body.text});
		await comment.save();
		const commentToPost = await Post.findOne({_id: req.body.postId});
		await commentToPost.comments.push(comment.id);
    await commentToPost.save();
		res.status(200).json({comment, message: 'Comment has been created!'});
	} catch (err) {
		console.log(err);
		res.status(400).json('Error!');
	}
});

module.exports = router;
