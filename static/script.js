// const encodedParams = new URLSearchParams();
// encodedParams.append("requestUrl", "<REQUIRED>");
// encodedParams.append("userKey", "<REQUIRED>");
// encodedParams.append("pageIds", "<REQUIRED>");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Host': 'GameDatabasestefan-skliarovV1.p.rapidapi.com',
// 		'X-RapidAPI-Key': '4a7a27e753mshe8c1eed5f04fb1dp1b9763jsna989b692cae0'
// 	},
// 	body: encodedParams
// };

// fetch('https://gamedatabasestefan-skliarovv1.p.rapidapi.com/getPages', options)
// 	.then(response => response.json())
// 	.then(response => console.log('test',response))
// 	.catch(err => console.error(err));
    

//     console.log('etetetetet')



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
	}
	// body: 
    // "fields: *; where id = 110592;"
};

fetch('https://api.igdb.com/v4/covers/', options)
	.then(response => response.json())
	.then(response => console.log('test',response))
	.catch(err => console.error(err));
    

    console.log('etetetetet')