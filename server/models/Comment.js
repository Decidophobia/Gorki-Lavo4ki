const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Comment', commentSchema);
