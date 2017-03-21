var express = require("express")
var config = require("./config.json")
var app = express()

app.get("/", function(req, res){
	res.send("Test")
})

app.listen(config.express.port, function(){
	console.log("Listening on port 3000")
})