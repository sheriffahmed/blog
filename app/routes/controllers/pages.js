var auth = require("../../auth/local-signup");
var post = require("../../models/blogPost");

var pages = {

	index: function(req, res){
		post.find({/*"user": req.user.username*/}, function(err, post){
			if(err){
				console.log(err);
			} else{
				res.render("index", {
					status: req.query.status,
					posts: post
				});				
			}
		});

	},
	login: function(req, res){
		res.render("login");
	},
	signup: function(req, res){
		auth({
			name: req.body.username,
			pass: req.body.password,
			first: req.body.firstName,
			last: req.body.lastName
		}, function(data){
			if(data.success){
				res.json({
					"success": "All Good"
				});
			} else {
				res.json({
					"success": "Messed Up"
				});
			}
		});

		// res.render("signup");
	},
	create: function(req, res){
		res.render("create");
	},

post: function(req, res){
	post.findOne({"_id": req.query.p}, function(err, post){
		if(err){
			console.log(err);
		} else{
			res.render("post", {
				current: post
			});
		}
	});
}

}
module.exports = pages;