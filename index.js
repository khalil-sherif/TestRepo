var express = require("express")
var config = require("./config.json")

app.listen(config.express.port, function(){
	console.log("Listening on port " + config.express.port)
})