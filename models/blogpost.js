var mongoose = require("mongoose");

var blogPost = new mongoose.Schema({
	title: String,
	post: String,
	date: {
		month: String,
		day: String,
		year: String
	},
	// short_name: String,
	// short_desc: String,
	// content: String,
	// created_at: {type: Date, default: Date.now}
	user: String,
	comments: [
	{
		comment: String,
		user: String
	}
	]
});

module.exports = mongoose.model ("posts", blogPost);