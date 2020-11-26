const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
  user: { type: String },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now()},
});

module.exports = mongoose.model('Comment', commentSchema);
