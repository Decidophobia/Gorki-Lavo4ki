const router = require('express').Router();
const Post = require('../models/Post');


router.get('/', async (req, res) => {
	try {
		const posts = await Post.find({});
		res.status(200).json(posts);
	} catch (err) {
		res.status(404).json('Error!');
	}
});

module.exports = router;