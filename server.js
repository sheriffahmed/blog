var express = require("express"),
	mongoose = require("mongoose"),
	session = require("express-session"),
	bcrypt = require("bcrypt-nodejs"),
	passport = require("passport"),
	hbs = require("hbs"),
	bodyParser = require("body-parser"),
	app = express();

	app.set("view engine", "hbs");

	mongooose.connect("mongodb://localhost/user");
	
		app.listen(8080);
	console.log("server is running");