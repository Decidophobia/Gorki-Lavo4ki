const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
  authorID: { type: String },
  coord: [],
  title: { type: String },
  description: { type: String },
  photo: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  address: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  dislikes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Post', postSchema);
