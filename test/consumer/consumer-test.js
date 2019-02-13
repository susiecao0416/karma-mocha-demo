const provider = pact({
	consumer: 'testStaffing',
	provider: 'testWorkday',
	port: 8002,
	log: path.resolve(process.cwd(), 'logs', 'pact.log'),
	dir: path.resolve(process.cwd(), 'pacts'),
	logLevel: 'INFO',
	spec: 2
});