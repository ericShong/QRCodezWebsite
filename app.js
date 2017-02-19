const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

const mongoose = require('mongoose');
mongoose.connect('mongodb://qrcodes:Hz9D39kurs7ra4qrQhMgiO5aVfh7WoEbtc3yGSet0szf0bd1KeI6QyT0irihfoUGsZrkCNuPQur11XhtXPaKeA==@qrcodes.documents.azure.com:10250/?ssl=true');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("we're connected to mongo!");
});

app.get("/", function(req,res){
	res.sendFile(__dirname + "/public/index.html")
});

app.get("/person/:username", function(req,res) {
	username = req.params.username;
	res.send(username);
});

app.get("/ad/:adname", function(req,res) {
	adname = req.params.adname;
});

app.post("/register", function(req, res) {
	res.send(req.body.first_name);
});

app.listen(port);