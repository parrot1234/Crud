var express = require("express");
var app = express();
var port = 3000;
const MongoClient = require('mongodb')

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   });
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

const url = 'mongodb://localhost:27017/';
  
// Name of the database
const dbname = "Inventory";
  
MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
})


