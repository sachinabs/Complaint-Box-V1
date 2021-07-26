const { json } = require("body-parser");
const { format } = require("path/posix");

function trendAndListData()
{
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
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

        let myjsonData = JSON.parse(this.response)
        
        trendOne.innerHTML = myjsonData[0].name;
        trendTwo.innerHTML = myjsonData[1].name;
        trendThree.innerHTML = myjsonData[2].name;
        trendFour.innerHTML = myjsonData[3].name;

        trendonePara.innerHTML = myjsonData[0].msg;
        trendtwoPara.innerHTML = myjsonData[1].msg;
        trendthreePara.innerHTML = myjsonData[2].msg;
        trendfourPara.innerHTML = myjsonData[3].msg;

        trendOne.setAttribute("href", "http://localhost:9099/id?" + myjsonData[0].id)
        trendTwo.setAttribute("href", "http://localhost:9099/id?" + myjsonData[1].id)
        trendThree.setAttribute("href", "http://localhost:9099/id?" + myjsonData[2].id)
        trendFour.setAttribute("href", "http://localhost:9099/id?" + myjsonData[3].id)


      }

    };
    http.open("GET", "http://127.0.0.1:9099/trend", true);
    http.send();
}

function displayAllData()
{
  var httpRequestForShowAll = new XMLHttpRequest();
  httpRequestForShowAll.onreadystatechange= function (){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById("data").innerHTML= this.response;
    }
  };
  httpRequestForShowAll.open("GET", "http://127.0.0.1:9099/showall", true);
  httpRequestForShowAll.send();
}
