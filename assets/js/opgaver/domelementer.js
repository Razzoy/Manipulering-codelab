/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
const redFigure = document.getElementById("redFigure");
console.log(redFigure);

const yellowFigure = document.getElementById("yellowFigure");
console.log(yellowFigure);

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

// din kode her
changeColor(redFigure);
changeColor(yellowFigure);

function changeColor(element){
    element.style.backgroundColor = "#00f";
}

/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
const taskTwo = document.getElementById("opgaveTwo");
const h2 = document.createElement('h2');
const p = document.createElement('p');
h2.innerText = "Opgave 2.1 løsning";
p.innerText = "Jeg har løst opgave 2.1";

taskTwo.appendChild(h2);
taskTwo.appendChild(p);



// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
const allFigures = document.getElementsByClassName('purpleFigures');

console.log(allFigures);


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
const purpleFigures = Array.from(document.getElementsByClassName('purpleFigures'));

purpleFigures.forEach(backgroundColor)

function backgroundColor(figures){
    figures.style.backgroundColor = "#f00";
}

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
const children = purpleFigures[0];

children.forEach(figureText);

function figureText(myElement){
    myElement.innerHTML = '<h3>RED</h3>';
}

// purpleFigures[0].innerHTML = '<h3>RED</h3>';


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her




