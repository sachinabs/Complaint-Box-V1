document.getElementById("voteUp").addEventListener("click", clientUpVote);

function clientUpVote()
{
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
      let val = document.getElementById("downVote");
      val.innerText = parseInt(val.innerText) + 1;

      let rate = document.getElementById("Rating");
      rate.innerText = parseInt(rate.innerText) + 1;  

      document.getElementById('voteUp').style.visibility = 'hidden';
      document.getElementById('voteDown').style.visibility = 'hidden';   
}