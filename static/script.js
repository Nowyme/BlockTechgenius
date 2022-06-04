// const { entries } = require("lodash");

// const encodedParams = new URLSearchParams();
// encodedParams.append("requestUrl", "<REQUIRED>");
// encodedParams.append("userKey", "<REQUIRED>");
// encodedParams.append("pageIds", "<REQUIRED>");

// const options = {
//     mode: 'no-cors',
// 	method: 'POST',
// 	headers: {
// 		'Client-ID': 'vbwxbmene4l1wgm17cfr5c9b60xd9r',
// 		'Authorization': 'Bearer samjeh51ql0q240la094i1pwmakt11',
// 		'Content-Type': 'application/json'
// 	},
// 	body: encodedParams

// };

// fetch('https://api.igdb.com/v4/covers/', options)
// 	.then(response => response.json())
// 	.then(response => console.log('test',response))
// 	.catch(err => console.error(err));


// Intersection observer 
const cards = document.querySelectorAll(".card-item");

const options = {
  root: null,
  threshold: 0.4,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("slide-top", entry.isIntersecting);
  });
}, options);
    

cards.forEach((card) => {
  observer.observe(card);
  card.classList.add("hide");
});
