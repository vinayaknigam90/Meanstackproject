const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri,( err) => {
  if (err) {
  console.log('Could NOT connect to database : ', err );
 }else {
    console.log('Connected to database :' + config.db);
  }
});

app.use(express.static(_dirname+ '/client/dist/'));

app.get('*', (req, res) =>{
  res.send(path.join(dirname+ '/client/dist/index.js'));
});

app.listen(8080 , () =>
{
  console.log('Listening on port 8080');
});
