const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//
const userShema = Schema({
	email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: {type: String, require: true},
  phone: {type: Number, require: true, unique: true},
  room: {type: Schema.Types.ObjectId, ref: 'Chat' },
  postRef: [ { type: Schema.Types.ObjectId, ref: 'Post' }],
  status: {type:Boolean, default:false},
  image: {type:String, default:"https://lh3.googleusercontent.com/q2k2Mco2k7wcSz_M3Wo0QL_YoMdXiL8FT1X_tqNN2A7PpAyEfTu9aHEQB6lARDBLXw"},
  fullName:{type: String, default:"Иван"},
  fullSurname :{type:String, default:"Иванов"},
  city :{type: String, default:"Санкт-Петербург"},
  area :{type: String, default:"не определился"},
});

module.exports = mongoose.model("User", userShema);
