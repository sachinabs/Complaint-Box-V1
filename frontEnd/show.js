function displayAllData(h, d) 
{

    let mainDiv = document.querySelector('.container');

    let card = document.createElement('div');
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
    description.id = "cardDescription";
    card.appendChild(description);

    let desc = document.createTextNode(d);
    description.appendChild(desc);

    decButton = document.createElement('button');
    decButton.className = "cardVoteDown";
    decButton.id = "cardVoteDown";
    card.appendChild(decButton);

    count = document.createElement('label');
    title.className = "voteCount";
    title.id = "voteCount";
    card.appendChild(count);

    incButton = document.createElement('button');
    incButton.className = "cardVoteUp";
    incButton.id = "cardVoteUp";
    card.appendChild(incButton);
}  
