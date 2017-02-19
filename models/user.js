const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name: String,
	access_token: String
});

module.exports = mongoose.model('User', UserSchema)