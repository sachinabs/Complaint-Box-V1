function displayAllData(h, d, l) 
{

    let mainDiv = document.querySelector('.container');

    let card = document.createElement('div');
    card.style.width = "30%";
    card.style.height = "50%";
    card.style.background = "#eeeee4";
    card.style.color = "black";
    card.style.boxShadow = "0.1rem 0.1rem 0.3rem 0.1rem rgba(7, 7, 7, 0.3)";

    card.className = "card";
    mainDiv.appendChild(card);

    title = document.createElement('h5');
    title.className = "cardTitle";
    title.id = "cardTitle";
    card.appendChild(title);

    let heading = document.createTextNode(h);
    title.appendChild(heading);

    description = document.createElement('p');
    description.className = "cardDescription";
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    description.id = "cardDescription";
    card.appendChild(description);

    let desc = document.createTextNode(d);
    description.appendChild(desc);

    decButton = document.createElement('button');
    decButton.style.width = "20px"
    decButton.style.height = "20px";
    decButton.style.background = "blue";
    decButton.style.color = "white";
    decButton.style.border = "none"
    decButton.innerHTML = "+";
    decButton.className = "cardVoteDown";
    decButton.id = "cardVoteDown";    
    card.appendChild(decButton);

    count = document.createElement('label');
    count.className = "voteCount";
    count.id = "voteCount";
    card.appendChild(count);

    let ct = document.createTextNode(l);
    count.appendChild(ct);

    incButton = document.createElement('button');
    incButton.style.width = "20px"
    incButton.style.height = "20px";
    incButton.style.background = "blue";
    incButton.style.color = "white";
    incButton.style.border = "none"
    incButton.innerHTML = "-";
    incButton.className = "cardVoteUp";
    incButton.id = "cardVoteUp";
    card.appendChild(incButton);
}  
