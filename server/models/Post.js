const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//future Post model
const postSchema = Schema({
  authorID: { type: Schema.Types.ObjectId, ref: 'User' },
  coord: [],
  title: { type: String, required: true },
  description: { type: String },
  photo: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Post', postSchema);
