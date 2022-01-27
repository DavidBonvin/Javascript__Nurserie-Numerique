// /*alert('coucou toi');*/

// let nom='toto';
// console.log('sans changement =>' , nom);

// console.log('en majuscule =>' , nom.toUpperCase());

// console.log(nom.substring(1,3));

// let pre=nom.substring(0,1);
// console.log (pre);

// let suf=nom.substring(3,5);
// console.log(suf);

// console.log(`${pre}${nom.substring(1,3).toUpperCase()}${suf}`);


// /* 1) tansformez 'toto et tata en majuscule dans machaine*/

// /* 2) tansformez 'chercher' en majuscule dans maChaine*/ 


// const maChaine="toto est partie chercher des petit pains avec tata.";




// // 1 Exercice 

//   console.log(maChaine.substring(0,5))
  
//   console.log(maChaine.substring(45,50))
// console.log (maChaine.substring(0,5) + maChaine.substring(45,50))

// let pree=maChaine.substring(0,5).toUpperCase();
// let suff=maChaine.substring(45,50).toUpperCase();
// let midle=maChaine.substring(5,45);

// let newChaine = `${pree}${midle}${suff}`

// console.log(newChaine);

// // 2) exercice

// console.log(maChaine.substring(0,15));
// console.log(maChaine.substring(15,24));
// console.log(maChaine.substring(24,50));

// let preee=maChaine.substring(0,15);
// let sufff=maChaine.substring(15,24).toUpperCase();
// let midlee=maChaine.substring(24,maChaine.length);

// let newChainee = `${preee}${sufff}${midlee}`
// console.log(newChainee);



let exemple = "bonjour je suis David"
console.log(exemple.split(`o`));
console.log(exemple.split(` `));   // attention, " ` ` " est différent de " ' ' " 



// conts numbers = new Array(1,2,3,4,5,6,7,8,9,10);
// const fruit = ["mangue", "pastèque", "poire"]

const voiture = ["BMW" , "Ford", "Audi" ];

console.log(voiture);        
console.log(voiture[0]);   // acces au 1er element
console.log(voiture[3]);   // acces au 4eme element 
voiture.unshift("Renault");  // ajout en debut de tableau
voiture.push("Peugeot");   // ajout en fin de tableau
voiture.shift();               // suprimer le dernier element
voiture.pop();                   // suprimer le dernier element
console.log(voiture.indexOf("Audi"));  // retourne l'index de l'element 
console.log(Array.isArray(voiture));    // true 


voiture[1] = "Peugeot"   // ici on a changé Audi pour Peugeot dans le tableau
console.log(voiture);

let tableauNumber = [1,2,3,4,5,6];

tableauNumber.unshift(0); 
console.log(tableauNumber);

tableauNumber.push(7);
console.log(tableauNumber);

tableauNumber[5] = 5;
console.log(tableauNumber); 

tableauNumber[4]= 5;
console.log(tableauNumber); 

// LES OBJETS

const personne = {
    prenom: "David",
    nom: " Cordoba",
    age: 28,
    passions: [ "foot", "natation", "jeux-videos"], 

    adresse:{ 
    rue: "rue Nationale", 
    ville: "lille",
    pays: "frace"
   }

} ; 
console.log (personne); 
console.log (personne.prenom); 
console.log (personne.passions);
console.log (personne.adresse); 
console.log (personne.adresse);
console.log (personne.adresse.pays);
console.log [personne.passions[2]]; 

console.log(`${personne.prenom}, il a  ${personne.age} et il adore le  ${personne.passions[0]}`);

personne.prenom = "julie" ; 
console.log (personne.prenom);

personne.adresse.ville = "california";
personne.adresse.pays = "EEUU" ; 

console.log(`${personne.prenom} vit en ${personne.adresse.ville} aux ${personne.adresse.pays} `); 

// Mardi 25 / 01 / 2022 

personne.adresse.rue = "Boulevard valley" ;

console.log(`${personne.prenom} vit dans la rue ${personne.adresse.rue} en ${personne.adresse.ville} aux ${personne.adresse.pays} `); 

 
const todos = [
    {
        id: 1, 
        Text: "faire les course",
        inCompleted: true, 
        tab:["aaaaa", "bbbbbb","ccccccc"]
    } ,
    {
        id: 2, 
        Text: "Balade au viex Lille",
        inCompleted: true, 
    },
    {
        id: 3, 
        Text: "Préparer le diner",
        inCompleted: false, 
    } , 
    {
        id: 4, 
        Text: "Gegarder la TV",
        inCompleted: false, 
    } ,                             ];

    // trouver les elements 
    
    console.log (todos [0]) ;
    
    console.log (todos [2].Text );

    console.log (todos [0] .inCompleted); 
    console.log (todos [1] .inCompleted); 
    console.log (todos [2] .inCompleted); 
    console.log (todos [3] .inCompleted); 

    console.log (todos [0] .tab [0]); 

    // Ajouter une neuveu element à todos. 

    todos.push( {
        id: 5,
        Text: "préparer les choses pour demain",
        inCompleted: false, 
    });

console.log(todos); 


// Condition

let heure = 23 ;  
if ( heure <= 17) {
    salutation = "Bonjour"
    
} else if (  heure < 22 ){
    salutation = "Bonsoir"
} else {
    salutation = "Bonne nuit"
}
; 
console.log(salutation); 

let a =  5 ;
let b = 10 ;
if (a == b ) {
    console.log ( "a & b son egaux")
} else {
    console.log ( "a & b ne sont pas egaux")
}; 

let c = 1
let d = 1
let e = 1

if ( c > d ){
    console.log ( " c est > à d")
} else if ( d > c ) {
    console.log ( " d est > à c ")
} else if ( d > e ) {
    console.log (" d est > à e ")
} else if ( e > c) {
    console.log ("e est > à a ")
} else if (c > a) {
    console.log (" c est > a ")
    
} else {
    console.log ( "c , d et e sont egaux")
}; 




//  && les deux condition  >=

let f = 0
let h = 10 
if ( f == 0 && h >= 10){
    console.log ( " ok ")
} else{
    console.log ("faux")
};

// seulement une condition alors c'est faux  >
if ( f == 0 && h > 10){
    console.log ( " ok ")
} else{
    console.log ("faux")
};

// || une de les deux condition est posible alors c'est  ok
if ( f == 0 || h > 10){
    console.log ( " ok ")
} else{
    console.log ("faux")
};

// excercice 1
let age = 2
if (age >= 0 || age <= 2){
    console.log( "Nourisson")
} else if (age > 2 && age <= 12){
    console.log("Enfant")
} else if (age > 12 && age <18) {
    console.log( "Hdo")
} else {
    console.log ( "Mayor")
};

// Exercice 2  c'es une condition que change une lef 

let performance = 90 ;
let prime  ;

if (performance >= 90 ){
    prime = 50
}else if( performance >= 70 && performance <= 80) {
    prime = 30
}else if ( performance >= 50 && performance <= 65){
    prime = 15
};
console.log (prime);

// TERNAIRE

let x = 5 ;

const message = x > 10 ? "ok" : "faux" 

console.log (message) 

let agee = 12 ;

const messagee = agee > 18 ? "majeur" : "Mineur"

console.log(messagee); 

let phrase1 = " je suis David"
let phrase2 = " et toi?"
 
const phrase3 = phrase1.length > phrase2.length ? "La phrase1 est plus grande que la phrase 2" : "La phrase2 es plus grande que la phrase1"


console.log (phrase3)
    

const vehicul = {
    id : 11541,
    matricule: "bc-561-fr",
    typy: "c",
    age: 5
    
}


const typeDeVehicul = vehicul.typy == "c" ? " c'es une camion" : "c'est une voiture"
 console.log(typeDeVehicul); 

const ageVehicul = vehicul.age > 5 ? "c'est une vehicul viex" : "c'est une vehicul neuvue"
console.log(ageVehicul);




