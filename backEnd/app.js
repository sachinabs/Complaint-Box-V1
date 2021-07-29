const { MongoClient } = require("mongodb");
let express = require("express");
var cors = require("cors");

const app = express();

// -------------------------------
// assist functions

function makeId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function dateAndTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  let cdata = date + " - " + time;
  return cdata;
}
// -------------------------------
app.get("/submit", (req, res) => {
  let Title = req.query.complaintTitle;
  let Text = req.query.complaintDiscretion;
  let myData = {
    ComplaintTitle: Title,
    ComplaintText: Text,
    ComplaintId: makeId(6),
    ComplaintTime: dateAndTime(),
    ComplaintUpVotes: 0,
    ComplaintDownVotes: 0,
    totalVotes:0,
    averageVote:0
  };

  async function createListing(client, newListing, response) {
    const result = await client
      .db("sample")
      .collection("students")
      .insertOne(newListing);

    if (result.acknowledged === true) {
      res.send(
        "<script>alert('Your Complaint is recorded '); window.location.href = 'http://127.0.0.1:5501/frontEnd/index.html'; </script>"
      );
    } else {
      console.log("Data Not Inserted");
      response.json({ status: false });
    }
  }

  async function main() {
    const uri =
      "mongodb+srv://sachin:sachinabs@cluster0.iaz5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
      await client.connect();
      const pen = await createListing(client, myData, res);
    } catch (e) {
      console.log("test");
      console.error(e);
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  }
  main().catch(console.error);
});

app.get("/trend", cors(), (req, res) => {


  async function findListings(client) 
  {
    const cursor = client.db("sample").collection("students").find();
  //   const cursor = client.db("sample").collection("students").aggregate(
  //     [
  //       { $project: { total: { $add: [ "$ComplaintUpVotes", "$ComplaintDownVotes" ] } } }

  //     ]
  //  );
    const results = await cursor.toArray();
    res.json(results);
    console.log(results);
  }

  async function main() {
    const uri =
      "mongodb+srv://sachin:sachinabs@cluster0.iaz5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
      await client.connect();
      const pen = await findListings(client, res);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }
  main().catch(console.error);
  // myObj = [
  //   {
  //     name: "Mithun",
  //     msg: "This is CORS-enabled for a Single Route",
  //     id: "xyz",
  //   },
  //   {
  //     name: "Nikalya",
  //     msg: "This is CORS-enabled for a Single Route",
  //     id: "abc",
  //   },
  //   {
  //     name: "Hashini",
  //     msg: "This is CORS-enabled for a Single Route",
  //     id: "bda",
  //   },
  //   {
  //     name: "Arun",
  //     msg: "This is CORS-enabled for a Single Route",
  //     id: "pqr",
  //   },
  // ];
  // res.json(myObj);
});

app.get("/showall", cors(), (req, res) => {
  async function findListings(client) {
    const cursor = client.db("sample").collection("students").find();
    const results = await cursor.toArray();
    res.json(results);
  }

  async function main() {
    const uri =
      "mongodb+srv://sachin:sachinabs@cluster0.iaz5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
      await client.connect();
      const pen = await findListings(client, res);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }
  main().catch(console.error);
});


app.get("/voteUp",(req,res) =>{
  
  async function findListings(client) {
    const cursor = client.db("sample").collection("students").find();
    const results = await cursor.toArray();
  }

  async function main() {
    const uri =
      "mongodb+srv://sachin:sachinabs@cluster0.iaz5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
      await client.connect();
      const pen = await findListings(client, res);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }
  main().catch(console.error);
});





app.get("/id",(req,res) =>{
 
  console.log(req.query.cmpID);

});












const port = 9099;
app.listen(port, () => console.log(`Listening on port ${port}..`));




