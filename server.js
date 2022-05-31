/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const gameImg = require('./data/games');


const req = require('express/lib/request');
const res = require('express/lib/response');


// express app
const app = express();

app.use(express.static('static'));

// register view engine
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// mongoDB
let db = null;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');

async function connectDB() {
  const uri = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    console.log(error);
    throw error;
  }

}

// start webserver

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);

  connectDB().then(console.log("connectie met mongodb"));
  
});


 app.get('/', async (req, res) => {

  const games = await db.collection("game_collection").find({}, {}).toArray();
  
  const title = (games.length == 0) ? "No games where found" : "Games";
  res.render('pages/index', { title, games });
  
});



app.post('/', async (req, res) => {
  try{
  const games = db.collection('game_collection');
  
  console.log(games);

    await games.updateOne({ _id: ObjectId(req.body.like) }, { $set: { like: true } });
    
    res.redirect('pages/index');
  } catch (err) {
    console.log(err);
  }

  
});











//  const gamesSchema = {
//    name: String,
//    genre: String,
//  }
//  const Game = mongoose.model('Game',  gamesSchema);

//  app.get('/'), (req, res) => {
//    Game.find({}, function(err, game_collection){
//      res.render('pages/index',{
//        gamesList: games
//      })
//    })




// 404 page
app.use((req, res) => {
  res.status(404).render('pages/404');
});




