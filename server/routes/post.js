const router = require('express').Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
	console.log(req.body);

	try {
		const post = new Post(req.body);
		console.log(post);
		await post.save();

		res.status(200).json(post);
	} catch (err) {
		res.status(404).json('Error!');
	}
});

module.exports = router;
