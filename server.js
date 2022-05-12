
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

//express app
const app = express();
const port = 3000
app.use(express.static('static'));

//register view engine
app.set('view engine', 'ejs');



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/head', (req, res) => {
  res.render('partials/head');
})


// 404 page
app.use((req, res) => {
  res.status(404).render('404');
});








 



