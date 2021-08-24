const express = require('express');
const path = require('path');

const app = express();

var xml2js = require('xml2js');
const fetch = require('node-fetch')

app.get('/public', (req,res) => {
  
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    const url = "https://api.flickr.com/services/feeds/photos_public.gne"
    var jsonRESULT = ""

    var xml = fetch(url).then((res) => res.text()).then(body => {
        xml2js.parseString(body, (err, result) => {
            if (err) throw err;
            jsonRESULT = result
        })
        res.send(jsonRESULT)
    })
    

});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started at port: " + port));

