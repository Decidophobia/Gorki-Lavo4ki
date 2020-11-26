const express = require('express');
const app = express();
const path = require('path')

const mongoose = require('mongoose');
require('dotenv').config();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const configSocket = require('./config/socket');
const config = require('./middleware');

config(app);
configSocket(io, app);

const port = process.env.PORT || 4000;

async function startServer() {

	try {
		await mongoose.connect(`mongodb+srv://cleaner:${ process.env.DB_PASSWORD }@subbotnic.ldlmg.mongodb.net/test`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		server.listen(port, () => console.log(`Server has been started at ${ port } port...`));
	} catch (err) {
		console.log(err);
	}

}

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

startServer();

module.exports = app;
