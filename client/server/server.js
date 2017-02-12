const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 1337;
const ip = process.env.IP || '127.0.0.1';
// const cors = require('cors')
app = express();

// app.use(cors());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.set('views', __dirname - '/server' + '/client/views');
app.set('view engine', 'html');
app.use(express.static(__dirname - '/server' + '/client/views'));
app.use(bodyParser.json());

//Routes
require('./routes/routes')(app);

app.listen(port, function() {
  console.log('The magic is on ' + ip + ':' + port);
});