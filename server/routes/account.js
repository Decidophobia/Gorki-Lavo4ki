const router = require('express').Router();
const User = require('../models/User');


router.post('/', async (req, res) => {
	try {
		const user = await User.findOne({name: req.body.user})
		res.status(200).json(user);
	} catch (err) {
		res.status(404).json('Error!');
	}
});

router.post('/change', async (req, res) => {
	try {
		console.log(req.body);
		const user = await User.findOneAndUpdate({_id:req.body.id},{
			image:req.body.image,
  			fullName: req.body.fullName, 
  			fullSurname: req.body.fullSurname,
   			city:req.body.city,
   			area: req.body.area,
			email: req.body.email,
  		 	phone:req.body.phone
			}, {new:true})
		await user.save()
		res.status(200);
	} catch (err) {
		res.status(404).json('Error!');
	}
});
module.exports = router


