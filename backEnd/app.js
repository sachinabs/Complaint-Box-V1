const { MongoClient } = require("mongodb");
let express = require("express");
var cors = require('cors');



const app = express();

// -------------------------------
// assist functions

function makeId(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

function dateAndTime()
{
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours()+':'+today.getMinutes();
  let cdata = date +' - '+  time;
  return cdata;
}
// -------------------------------
app.get("/submit",(req,res)=>{

  let Title = req.query.complaintTitle;
  let Text = req.query.complaintDiscretion;
  let myData = {
    'ComplaintTitle': Title,
    'ComplaintText': Text,
    'ComplaintId': makeId(6),
    'ComplaintTime':dateAndTime()
  }
res.send(myData);
});

app.get("/trend",cors(),(req,res) => {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
});


const port = 9099;
app.listen(port, () => console.log(`Listening on port ${port}..`));
