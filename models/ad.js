const mongoose = require('mongoose');

const AdSchema = mongoose.Schema({
	name: String,
	student_ad_URL: String,
	professional_ad_URL: String,
});

module.exports = mongoose.model('Ad', AdSchema)

//Gap, traderjoes