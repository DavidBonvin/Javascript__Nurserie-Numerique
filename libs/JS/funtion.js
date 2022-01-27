// funtion              sonne = nom de la funtion  return = (a,b)
function sonne ( a,b,c,d ) {
    return a + b + c * d 
}
// pour la invoque la function
sonne (1,3,4,3)

// pour voir dans le navegateur

console.log (sonne(1,2,3,3));

function produit (a,b,c){
    return a * b * c 
}
console.log ( "le produit est:", produit (2,3,4)); 

function surface (base,hauteur) {
    return base * hauteur / 2 
}
console.log ("la surface est: ", surface (3,5) );
 

// une function que convierta los minutos en segundos.
let min = 3
function convertisseur (min){
    return min * 60
}
console.log (min, "sont", convertisseur (min), "segundos");

 // une function que nos returne le premier element de tableau

 TAB2 = ["salut", "Bonjour", "Hola"]

 console.log (TAB2[0])




 function returne (){
    return TAB2[0]
}
console.log("l'élément",0, " de TAB2 est:" ,returne ());

// function et condition
// une function que me donne le plus grande de les numbers

let a = 10
let b = 20
let c = 15




if ( a>b && a > b){
    console.log ( a)
} else if (b>a && b>c){
    console.log ( b )
} else if (c > a && c> b) {
    console.log(c)
};


function leplusgrande (a,b,c) {
    if ( a>b && a > b){
        return  a
    } else if (b>a && b>c){
        return b
    } else if (c > a && c> b) {
        return c
    };
}; 
console.log ("le plus grande est", leplusgrande (a,b,c));