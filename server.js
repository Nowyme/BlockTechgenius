
require('dotenv').config();

const express = require('express');
const game = require('./data/games');

const req = require('express/lib/request');
const res = require('express/lib/response');

//express app
const app = express();

app.use(express.static('static'));

//register view engine
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
})

app.get('/', (req, res) => {
  res.render('pages/index', {game: game });
});

//mongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404');
});








 



