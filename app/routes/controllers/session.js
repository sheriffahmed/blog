// checking if the user if logged in
module.exports = function(req, res, next){
	if(!req.user){
		res.redirect("/login");
	} else {
		next();
	}
}