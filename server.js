var express = require("express"),
	mongoose = require("mongoose"),
	session = require("express-session"),
	bcrypt = require("bcrypt-nodejs"),
	passport = require("passport"),
	hbs = require("hbs"),
	bodyParser = require("body-parser"),
	path =  require("path"),
	methodOverride = require("method-override"),
	auth = require("./app/auth/passport-local"),
	routes = require("./app/routes/routes"),
	app = express();

	app.set("view engine", "hbs");
	app.set("views", path.join(__dirname, "app/views"));
	// app.use("/client", path.join(__dirname, "app/client"));
	app.use("/static", express.static(path.join(__dirname, "app/client")));


	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
	extended: true	
}));

	app.use(session({
		secret: 'itsASecret',
		resave: true,
		saveUninitialized: true
	}));

	app.use(methodOverride('_method'));

	app.use(passport.initialize());
	app.use(passport.session());

	// localAuth(passport);
	auth(passport);
	routes(app, passport);

	mongoose.connect("mongodb://localhost/blog");
	mongoose.connect(process.env.DB_URL);

		app.listen(process.env.PORT || 8080);
	console.log("server is running");