const router = require('express').Router();
const Post = require('../models/Post');


router.get('/getPosts', async (req, res) => {
	try {
		const posts = await Post.find({}).populate('comments');
		res.status(200).json(posts);
	} catch (err) {
		res.status(404).json('Error!');
	}
});

router.post('/addPost', async (req, res) => {
	console.log(req.body);
	try {
		const post = new Post(req.body);
		console.log(post);
		await post.save();

		res.status(200).json(post);
	} catch (err) {
		res.status(404).json('Post has been created!');
	}
});

module.exports = router;
