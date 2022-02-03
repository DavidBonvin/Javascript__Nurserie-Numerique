//let texte = document.getElementById ("texte");
// texte.textContent = "j'ai mis un texte";

//texte.innerHTML = "<img src='/libs/assets/images/emojione_fallen-leaf.svg' alt='mon image' />" ;

let galerie = ["Afpa.svg", "CSS3.svg" , "git.svg", "Foto_David.svg" , "HTML5.svg" ]

let monImage = document.querySelector ("img");
let ajoutImage = document.querySelector ("#add");

function getRandmInt (max) {
    return Math.floor(Math.random()*max);
}


function changeImage () {
   let dice =  getRandmInt (galerie.length);
   console.log(dice);
  monImage.src = "/libs/assets/images/" + galerie[dice] ;
}

 function addImage () {
     console.log (ajoutImage)

 }

 let Garage = [
     {
         Marque: "Ferrari",
         Couleur: "rouge"
     }, 
     {
        Marque: "BMW",
        Couleur: "blue"
    }, 
    {
        Marque: "Ford",
        Couleur: "noire"
    }, 
    {
        Marque: "Audi",
        Couleur: "Blanch"
    }, 
 ]

  console.log ("j'ai une " + Garage [0].Marque + "de colour " + Garage [0]);

  for (let i =  0 ; i <  3 ; i ++ ) {
    document.write("j'ai une " + Garage [i].Marque + "de colour " + Garage [i].Couleur + "<br />" );
  }

   Garage.forEach(
    voiture => {
        console.log (`j'ai une ${voiture.Marque} de couleur ${voiture.Marque} <br>`) ;


     }
     ) ;