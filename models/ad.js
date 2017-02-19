const mongoose = require('mongoose');

const AdSchema = mongoose.Schema({
	imageURL: String,
	link: String,
	name: String
});

module.exports = mongoose.model('Ad', AdSchema)