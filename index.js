const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      path = require('path');

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port);

console.log('Server fired up on port ' + port); 

exports = module.exports = app;
