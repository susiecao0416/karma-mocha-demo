request
	.get(`${API_ENDPOINT}/provider`)
	.query({validDate: new Date().toISOString()})
	.then((res) => {
		console.log(res.body)
	})