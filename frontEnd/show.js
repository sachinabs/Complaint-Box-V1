function display() 
{
    alert("Testing");

    let mainDiv = document.querySelector('.main-container');

    let card = document.createElement('div'); 
    card.className = "card card-3";
    mainDiv.appendChild(card);

    title = document.createElement('h2');
    title.className = "card__title";
    title.id = "cardTitle";
    // title.innerHTML = "SQL Network Interfaces";
    card.appendChild(title);

    // let heading = document.createTextNode(h);
    // title.appendChild(heading);

    description = document.createElement('p');
    description.className = "content";
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmodm tempor incididunt  sed do eiusmodm tempor incididunt sed do eiusmodm tempor incididunt"   
    description.id = "cardDescription";
    card.appendChild(description);

    descriptionTwo = document.createElement('p');
    descriptionTwo.className = "card__apply";
    // descriptionTwo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    descriptionTwo.id = "cardDescriptionTwo";
    card.appendChild(descriptionTwo);


    link = document.createElement('a');
    link.className = "card__link";
    link.id = "readmore";
    link.innerHTML = "Read More"
    descriptionTwo.appendChild(link);

    border = document.createElement('i');
    border.className = "fas fa-arrow-right";
    border.id = "readmore";
    link.appendChild(border);



}  
