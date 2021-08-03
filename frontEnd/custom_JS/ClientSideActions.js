let filterUrl_clientSide = window.location.href;
let filter_clientSide = filterUrl_clientSide.split("=");
let postNumber_clientSide = filter_clientSide[1];

document.getElementById("voteUp").addEventListener("click", clientUpVote);
console.log(sessionStorage.getItem(postNumber_clientSide));


      if(sessionStorage.getItem(postNumber_clientSide) == "Down" || sessionStorage.getItem(postNumber_clientSide) == "Up")
      {
            document.getElementById('voteUp').style.visibility = 'hidden';
            document.getElementById('voteDown').style.visibility = 'hidden';
      
            document.getElementById('response').innerHTML = "<br>Thank you for your response...😊"         
      }


function clientUpVote()
{     
       sessionStorage.setItem(postNumber_clientSide, "Up");
            console.log(sessionStorage.getItem(postNumber_clientSide));        
            // alert("Vote Down...!");   
            let val = document.getElementById("upVote");
            val.innerText = parseInt(val.innerText) + 1;

            let rate = document.getElementById("Rating");
            rate.innerText = parseInt(rate.innerText) + 1;  


            document.getElementById('voteUp').style.visibility = 'hidden';
            document.getElementById('voteDown').style.visibility = 'hidden';
      
            document.getElementById('response').innerHTML = "<br>Thank you for your response...😊"             
}

document.getElementById("voteDown").addEventListener("click", clientDownVote);

function clientDownVote()
{
      sessionStorage.setItem(postNumber_clientSide, "Down");
      console.log(sessionStorage.getItem(postNumber_clientSide));  

      let val = document.getElementById("downVote");
      val.innerText = parseInt(val.innerText) + 1;

      let rate = document.getElementById("Rating");
      rate.innerText = parseInt(rate.innerText) + 1;  

      document.getElementById('voteUp').style.visibility = 'hidden';
      document.getElementById('voteDown').style.visibility = 'hidden';   
      
      document.getElementById('response').innerHTML = "<br>Thank you for your response...😊"

}