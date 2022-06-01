/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
require("dotenv").config();

const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");


// express app
const app = express();
app.use(express.static("static"));

// register view engine
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoDB connect
let db = null;
const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");

async function connectDB() {
  const uri =
    "mongodb+srv://" +
    process.env.DB_USERNAME +
    ":" +
    process.env.DB_PASS +
    "@" +
    process.env.DB_HOST +
    "/" +
    process.env.DB_NAME +
    "?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

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

// index
app.get("/", async (req, res) => {
  try {
    const games = await db.collection("game_collection").find({}, {}).toArray();
    const user = await db.collection("user").find({}, {}).toArray();

    res.render("pages/index", { games, user });
  } catch (error) {
    console.log(error);
  }
});

// mygames
app.get("/mygames", async (req, res) => {
  try {
    const likegames = await db
      .collection("game_collection")
      .find({ like: true }, {})
      .toArray();
    const user = await db.collection("user").find({}, {}).toArray();
    res.render("pages/mygames", { likegames, user });
  } catch (error) {
    console.log(error);
  }
});

// like
app.post("/", async (req, res) => {
  try {
    const games = db.collection("game_collection");

    const users = await db.collection("user");

    await games.updateOne(
      { _id: ObjectId(req.body.like) },
      { $set: { like: true } }
    );

    await users.updateOne(
      { _id: ObjectId("62967307a4ff59e9678d2943") },
      { $push: { game_id: req.body.like } }
    );

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

// unlike
app.post("/unlike", async (req, res) => {
  try {
    const games = db.collection("game_collection");

    const users = await db.collection("user");

    await games.updateOne(
      { _id: ObjectId(req.body.unlike) },
      { $set: { like: false } }
    );

    await users.updateOne(
      { _id: ObjectId("62967307a4ff59e9678d2943") },
      { $pull: { game_id: req.body.unlike } }
    );

    res.redirect("/mygames");
  } catch (err) {
    console.log(err);
  }
});

//work in progress
// mygames display 
app.get("pages/mygames", async (req, res) => {
  const user = await db.collection("user").findOne("62967307a4ff59e9678d2943");
  const games = await db.collection("game_collection").find({}, {}).toArray();
  console.log(user);
  const userGames = games.filter((game) => user.game_id.includes(game.id));
  console.log(userGames);

  res.render("pages/mygames", { user, games, userGames });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("pages/404");
});
