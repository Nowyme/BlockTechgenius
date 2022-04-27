
const express = require('express')
const app = express()
var _ = require('lodash');

app.get('/', function (req, res) {
  res.send('Hello World tes')
})

app.listen(3000)


 var users = [
   { 'user': 'barney', 'age': 36, 'active': true },
   { 'user': 'fred',   'age': 40, 'active': false }
 ];

 let activeUser = _.filter(users, { 'age': 36, 'active': true });
 console.log(activeUser);

