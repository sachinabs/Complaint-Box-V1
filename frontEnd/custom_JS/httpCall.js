const { json } = require("body-parser");
const { format } = require("path/posix");

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
      console.log(myjsonData);

      trendOne.innerHTML = myjsonData[0].ComplaintTitle;
      trendTwo.innerHTML = myjsonData[1].ComplaintTitle;
      trendThree.innerHTML = myjsonData[2].ComplaintTitle;
      trendFour.innerHTML = myjsonData[3].ComplaintTitle;

      trendonePara.innerHTML = myjsonData[0].ComplaintText;
      trendtwoPara.innerHTML = myjsonData[1].ComplaintText;
      trendthreePara.innerHTML = myjsonData[2].ComplaintText;
      trendfourPara.innerHTML = myjsonData[3].ComplaintText;

      trendOne.setAttribute(
        "href",
        "showSingle.html?cid="+ myjsonData[0].ComplaintId
      );
      trendTwo.setAttribute(
        "href",
        "showSingle.html?cid="+ myjsonData[1].ComplaintId
      );
      trendThree.setAttribute(
        "href",
        "showSingle.html?cid="+ myjsonData[2].ComplaintId
      );
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
      // document.getElementById("data").innerHTML = this.response;
    }
  };
  httpRequestForShowAll.open("GET", "http://127.0.0.1:9099/showall", true);
  httpRequestForShowAll.send();
}

function displayOne() {
  let filterUrl = window.location.href;

let filter = filterUrl.split("=");
let postNumber = filter[1];
  var httpRequestForOneData = new XMLHttpRequest();
  httpRequestForOneData.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     
    console.log(this.response);

    }
  };
  httpRequestForOneData.open("GET", "http://127.0.0.1:9099/showOne?cid="+ postNumber, true);
  httpRequestForOneData.send();
}

