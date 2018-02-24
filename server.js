var app = require('./app');
var port = process.env.PORT || 3000;

app.get('*', function(req, res) {
	// load the single view file (angular will handle the page changes on the front-end)
	res.sendFile(__dirname + '/public/index.html'); 
});

app.listen(port);