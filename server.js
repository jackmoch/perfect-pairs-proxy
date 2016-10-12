'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const request = require('request')
app.set('port', port)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/*', (req, res) => {
  let newOpenLibURL = req.url
  newOpenLibURL = `https://openlibrary.org${newOpenLibURL}`
  request.get(newOpenLibURL, (err, _, body) => {
    res.send(body)
  });
});


app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})