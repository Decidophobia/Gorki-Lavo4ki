module.exports = function (app) {

	const express = require('express');
	const morgan = require('morgan');
	const passport = require('passport');
	const cors = require('cors');

	const authRoute = require('../routes/auth');
	const postRoute = require('../routes/post');
	const mapRoute = require('../routes/map');
	const accountRoute = require('../routes/account');
  const commentRoute = require('../routes/comments');
  const voteRoute = require('../routes/vote')

	// app.use(cors());
	app.use(passport.initialize());
	require('../middleware/passport')(passport);

	app.use(morgan('dev'));
	app.use(express.urlencoded({extended: true}));
	app.use(express.json());


// routes
	app.use('/auth', authRoute);
	app.use('/post', postRoute);
	app.use('/map', mapRoute);
	app.use('/account', accountRoute);
	app.use('/comments', commentRoute);
  app.use('/vote', voteRoute)
};
