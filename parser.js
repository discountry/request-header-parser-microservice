var express = require("express");
var app = express();

app.get('/',function (req,res) {
    var json = {"ipaddress":req.ip,"language":req.acceptsLanguages()[0],"software":req.headers['user-agent'].match(/[(][\w\ \;]*[)]/gi)[0]};
    res.end(JSON.stringify(json));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Header Parser Microservice app established!');
});