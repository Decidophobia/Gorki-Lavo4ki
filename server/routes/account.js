const router = require('express').Router();
const User = require('../models/User');


router.post('/', async (req, res) => {
	try {
		const user = await User.findOne({name: req.body.user})
		console.log(req.body);
		res.status(200).json(user);
	} catch (err) {
		res.status(404).json('Error!');
	}
});

router.post('/change', async (req, res) => {
	try {
		console.log(req.body);
		res.status(200);
	} catch (err) {
		res.status(404).json('Error!');
	}
});
module.exports = router


