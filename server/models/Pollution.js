const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//future Post model
const pollutionSchema = Schema({
	authorID: {type: Schema.Types.ObjectId, ref: 'User'},
	coord: [],
	description: {type: String},
	photo: {type: String},
  comments: [{type: Schema.Types.ObjectId, ref: 'Message'}],
  
});

module.exports = mongoose.model('Pollution', pollutionSchema);
