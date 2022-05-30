const encodedParams = new URLSearchParams();
encodedParams.append("requestUrl", "<REQUIRED>");
encodedParams.append("userKey", "<REQUIRED>");
encodedParams.append("pageIds", "<REQUIRED>");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Host': 'GameDatabasestefan-skliarovV1.p.rapidapi.com',
		'X-RapidAPI-Key': '4a7a27e753mshe8c1eed5f04fb1dp1b9763jsna989b692cae0'
	},
	body: encodedParams
};

fetch('https://gamedatabasestefan-skliarovv1.p.rapidapi.com/getPages', options)
	.then(response => response.json())
	.then(response => console.log('test',response))
	.catch(err => console.error(err));
    

    console.log('etetetetet')