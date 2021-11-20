var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const axios = require('axios');

var selectedID = '';
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render('index.ejs');
})

app.post('/artist', function(req, res){
    const artist = req.body.artist_search;
    console.log(artist);

    axios.get(`https://itunes.apple.com/search?term=${artist}`).then((response) => {
        var artist_return = response.data;
        res.send(artist_return)
    })
})

app.listen(8080);
console.log('Listneting on port 8080')

