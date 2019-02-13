const server = require('server');

server.get('/provider/:', (req, res) => {
	const date = req.query.validDate
	
	res.json(
		{
			'test': 'NO',
			'validDate': new Date().toISOString(),
			'count': 100
		}
	)
})