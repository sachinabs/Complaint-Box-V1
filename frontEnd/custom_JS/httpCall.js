const { format } = require("path/posix");

function trendAndListData()
{
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML= this.response;
      }

    };
    http.open("GET", "http://127.0.0.1:9099/trend", true);
    http.send();
}

function display()
{
  alert("welcome");
  var httpRequestForShowAll = new XMLHttpRequest();
  httpRequestForShowAll.onreadystatechange= function (){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById("data").innerHTML= this.response;
    }
  };
  httpRequestForShowAll.open("GET", "http://127.0.0.1:9099/showall", true);
  httpRequestForShowAll.send();
}
