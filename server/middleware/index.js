module.exports = function (app) {

	const express = require('express');
	const morgan = require('morgan');
	const passport = require('passport');
	const cors = require('cors');

	const authRoute = require('../routes/auth');
	const postRoute = require('../routes/post');
	const accountRoute = require('../routes/account');

	// app.use(cors());
	app.use(passport.initialize());
	require('../middleware/passport')(passport);

	app.use(morgan('dev'));
	app.use(express.urlencoded({extended: true}));
	app.use(express.json());


// routes
	app.use('/auth', authRoute);
	app.use('/post', postRoute);
	app.use('/account', accountRoute);
};
