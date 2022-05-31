const encodedParams = new URLSearchParams();
encodedParams.append("requestUrl", "<REQUIRED>");
encodedParams.append("userKey", "<REQUIRED>");
encodedParams.append("pageIds", "<REQUIRED>");

const options = {
    mode: 'no-cors',
	method: 'POST',
	headers: {
		'Client-ID': 'vbwxbmene4l1wgm17cfr5c9b60xd9r',
		'Authorization': 'Bearer samjeh51ql0q240la094i1pwmakt11',
		'Content-Type': 'application/json'
	},
	body: encodedParams
   
};

fetch('https://api.igdb.com/v4/covers/', options)
	.then(response => response.json())
	.then(response => console.log('test',response))
	.catch(err => console.error(err));
    

    