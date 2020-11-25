const mongoose = require('mongoose');
const Comment = require('./Comment');
const Schema = mongoose.Schema;

//future Post model
const postSchema = Schema({
  authorID: { type: Schema.Types.ObjectId, ref: 'User' },
  coord: [],
  title: { type: String },
  description: { type: String },
  photo: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  address: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
