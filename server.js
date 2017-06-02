var express = require("express"),
	mongoose = require("mongoose"),
	session = require("express-session"),
	bcrypt = require("bcrypt-nodejs"),
	passport = require("passport"),
	hbs = require("hbs"),
	bodyParser = require("body-parser"),
	path =  require("path"),
	routes = require("./routes/routes"),
	app = express();

	// app.use("/client", path.join(__dirname, "app/client"));
	app.use("/static", express.static(path.join(__dirname, "app/client")));

	app.set("view engine", "hbs");
	app.set("views", path.join(__dirname, "app/client"));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
	extended: true	
}));

	app.use(session({
		secret: 'itsASecret',
		resave: true,
		saveUninitialized: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	// localAuth(passport);

	routes(app);

	mongoose.connect("mongodb://localhost/user");

		app.listen(8080);
	console.log("server is running");