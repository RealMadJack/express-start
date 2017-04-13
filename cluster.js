var cluster = require('cluster');

if (cluster.isMaster) {
	// count machine CPU's
	var cpuCount = require('os').cpus().length;

	// Create a worker for each CPU
	for (var i = 0; i < cpuCount; i += 1) {
		cluster.fork();
	}

	// Listen
	cluster.on('exit', function () {
		cluster.fork();
	});

} else {
	require('./bin/www');
}
