var request = require("request");
var options = {
	hostname: 'https://www.linkedin.com',
	path: '/oauth/v2/accessToken',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	},
	form: {'code': 'AQT-CjceW-ZgLk0TenXEVP--l4YYl9lbwPCgenoGhCZ-MblzGrVcoxPhQUyFk7W-DngXD10Aj8goRcSiVI5yqEZCCttzQznbl-wO9JYQJfAdLTm8Lt8',
	 'grant_type': 'authorization_code',
	 'redirect_uri': 'http//qrcodez.azurewebsites.net/',
	 'client_id': '861z9z5wdgrd9g',
	 'client_secret': 'nU8lQziKw3tE24vM'}
};

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})