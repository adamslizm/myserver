var http = require("http");

var server1 = http.createServer(function(req, res) {
  response.end('You are cool!' + req.url);

});

server1.listen(7000, function() {
	console.log('You are cool!');
});

var server2 = http.createServer(function(req, res) {
  response.end('You Stink! ' + req.url);

});

server2.listen(7500, function() {
	console.log('You Stink!');
});