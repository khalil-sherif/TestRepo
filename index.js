var express = require("express")
var config = require("./config.json")
var app = express()

app.get("/", function(req, res){
	res.send("Git Extensions")
})

app.listen(config.express.port, function(){
	console.log("Listening on port " + config.express.port)
})