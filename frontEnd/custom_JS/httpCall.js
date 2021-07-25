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