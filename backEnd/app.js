const { MongoClient } = require("mongodb");
let express = require("express");
var cors = require('cors');



const app = express();


app.get("/submit",(req,res)=>{

res.send("testing");

});

app.get("/show",cors(),(req,res) => {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
});


const port = 6000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
