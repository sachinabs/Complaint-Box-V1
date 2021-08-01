function trendAndListData() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("data").innerHTML= this.response;
      let trendOne = document.getElementById("trend_one");
      let trendTwo = document.getElementById("trend_two");
      let trendThree = document.getElementById("trend_three");
      let trendFour = document.getElementById("trend_four");

      let trendonePara = document.getElementById("trend_one_paragraph");
      let trendtwoPara = document.getElementById("trend_two_paragraph");
      let trendthreePara = document.getElementById("trend_three_paragraph");
      let trendfourPara = document.getElementById("trend_four_paragraph");

      let myjsonData = JSON.parse(this.response);
      // console.log(myjsonData);

      trendOne.innerHTML = myjsonData[0].ComplaintTitle;
      trendonePara.innerHTML = myjsonData[0].ComplaintText;
      trendOne.setAttribute(
        "href",
        "showSingle.html?cid="+ myjsonData[0].ComplaintId
      );

      trendTwo.innerHTML = myjsonData[1].ComplaintTitle;
      trendtwoPara.innerHTML = myjsonData[1].ComplaintText;
      trendTwo.setAttribute(
        "href",
        "showSingle.html?cid="+ myjsonData[1].ComplaintId
      );

      trendThree.innerHTML = myjsonData[2].ComplaintTitle;
      trendthreePara.innerHTML = myjsonData[2].ComplaintText;
      trendThree.setAttribute(
        "href",
        "showSingle.html?cid="+ myjsonData[2].ComplaintId
      );

      trendFour.innerHTML = myjsonData[3].ComplaintTitle;
      trendfourPara.innerHTML = myjsonData[3].ComplaintText;
      trendFour.setAttribute(
        "href",
        "showSingle.html?cid="+ myjsonData[3].ComplaintId
      );
    }
  };
  http.open("GET", "http://127.0.0.1:9099/trend", true);
  http.send();
}

function displayAllData() {
  var httpRequestForShowAll = new XMLHttpRequest();
  httpRequestForShowAll.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.response;
    }
  };
  httpRequestForShowAll.open("GET", "http://127.0.0.1:9099/showall", true);
  httpRequestForShowAll.send();
}

function displayOne() {
  let filterUrl = window.location.href;

let filter = filterUrl.split("=");
let postNumber = filter[1];
console.log(postNumber);
  var httpRequestForOneData = new XMLHttpRequest();
  httpRequestForOneData.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     
        let myjsonData = JSON.parse(this.response);
        console.log(myjsonData);
        

        let heading = document.getElementById("Heading");
        let rate = document.getElementById("Rating");
        let up = document.getElementById("upVote");
        let down = document.getElementById("downVote");
        let desc = document.getElementById("Description");
        let time = document.getElementById("date");

        heading.innerHTML = myjsonData[0].ComplaintTitle;
        rate.innerHTML = myjsonData[0].totalVotes;
        up.innerHTML = myjsonData[0].ComplaintUpVotes;
        down.innerHTML = myjsonData[0].ComplaintDownVotes;
        desc.innerHTML = myjsonData[0].ComplaintText;
        time.innerHTML = myjsonData[0].ComplaintTime;


        let up_vote = document.getElementById("voteUp");
        let down_vote = document.getElementById("voteDown");

        up_vote.setAttribute(
          "onclick",
          "postVoteUp();"
          
        );

        down_vote.setAttribute(
          "onclick",
          "postVoteDown();"
        );
          
    }
  };
  httpRequestForOneData.open("GET", "http://127.0.0.1:9099/showOne?cid="+ postNumber, true);
  httpRequestForOneData.send();
}


function postVoteDown()
{
  let filterUrl = window.location.href;
  let filter = filterUrl.split("=");
  let postNumber = filter[1];

  let httpRequestForVoteDown = new XMLHttpRequest();
  httpRequestForVoteDown.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     
          
    }
  };
  httpRequestForVoteDown.open("GET", "http://127.0.0.1:9099/VoteDown?cid="+ postNumber, true);
  httpRequestForVoteDown.send();
}

function postVoteUp()
{
  let filterUrl = window.location.href;
  let filter = filterUrl.split("=");
  let postNumber = filter[1];

  let httpRequestForVoteUp = new XMLHttpRequest();
  httpRequestForVoteUp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     
          
    }
  };
  httpRequestForVoteUp.open("GET", "http://127.0.0.1:9099/VoteUp?cid="+ postNumber, true);
  httpRequestForVoteUp.send();
}