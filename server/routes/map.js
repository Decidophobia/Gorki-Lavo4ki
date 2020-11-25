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

router.post('/', async (req, res) => {
	console.log(req.body.coord );
	try {
    await Post.deleteOne({ coord: req.body.coord });
		res.status(200).json(Math.random());
	} catch (err) {
		res.status(404).json('Post has been delete!');
	}
});

module.exports = router;
