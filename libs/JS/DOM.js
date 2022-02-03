// trouver une id
//la propieter .innerHTML 
document.getElementById("h1").innerHTML = "je suis David";

// avec const
const elemento = document.getElementById("p__id");

document.getElementById("h2").innerHTML = 
"C'est une exemple: je habite en France mais " + elemento.innerHTML;


//trouver un valise 

document.getElementsByTagName("p").innerHTML = "je recuperer mon P avec .getElementsBytagName"


// 

console.log (elemento);

const Romain = document.getElementById("Manon").innerHTML;



document.getElementById("paragrapheVide").innerHTML = "David chante et " + Romain 


const carlos = document.getElementsByClassName("andres").innerHTML;

document.getElementsByClassName("camilo").innerHTML =  "je veux travaille à" + carlos


// changer une image

document.getElementById('image__guitar').src="/libs/assets/images/image__guitar2.jpg" 

// changer la image avec un click
const guitar = 
function cambioImagen (){
    document.getElementById('image__guitar').src = "/libs/assets/images/image__guitar3.jpg"
}


// animation function que avec une click ajoute une <p id="demo"></p>

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

// Exemple 
function Competences_html () {
    document.getElementById("list_compe").innerHTML = "Cours préparatoire de développeur en ligne <br> Cours de base en génie informatique <br> Cours de front-end <br> Cours de css <br> Cours de base de javascript <br> Cours git et github <br>Cours de figma"
}

function competences_html_menos(){
  document.getElementById("list_compe").innerHTML = "";
}


// correction de cambio de imagen con un click sobre un button

function cambioImagen1 () {
    document.getElementById("gui1").src = "/libs/assets/images/image__guitar3.jpg"
}

//button sombra

function sombre (){
    document.body.style.backgroundColor="Red"
}

//pour estudiar 

let dark = true;
function switchColor() {
  dark = !dark;
  document.body.style.backgroundColor = dark ? "white" : "#424242";
}
let img = true;
function changeImg2() {
  img = !img;
  document.getElementById("img").src = img
    ? "images/img1.jpg"
    : "images/img2.jpg";
}

