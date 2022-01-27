// Classe 3 JS 26/01/2022

//Swich

let performance = 70;
let prime ; 

switch(performance) {
    case 90:
      prime = 60
      break;
    case 70:
      prime = 50
      break;
    case 60:
        prime = 40
        break;
    case 50:
        prime = 30
        break;
    case 30:
        prime = 10
    default: 
    prime = 0
      
  }
  console.log(prime); 

  // Excercice 2

  let NBR = 3;
  let type

  switch (NBR) {
    case 2: 
      type = "Moto"    
        break;
    case 4:
        type = "Voiture"
        break;
    case 6:
        type = "Camion"
  
      default:
          type = "Autre"
          
  }
  console.log(type); 

  // Loops

 /* for ( i=0; i <= 20; i++) {
      document.write("i stoke la valeur" + 
      i + 
      "lors du passage n°" +
      (i + 1) +
      "dans la bouche <br>")
      
  } */

  /*
  const cars =["BMW","Ford","Audi","Mercedes"];

  cars.push('text')
  cars.push('text2')

  for (i=0; i<cars.length; i++){
      document.write(cars[i] + "<br>") 
  }
*/

  const todos = [
    {
        id: 1, 
        Text: "faire les course",
        inCompleted: true, 
       
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

    console.log (todos [0] .inCompleted);


   


let i = 0;
while (i < todos.length) {
  document.write(
    `la tache est ${
      todos[i].isCompleted === true ? "" : "non"
    } complétée, elle contient ${todos[i].Text.length} caractères<br>`
  );

  i++;
}
let f = 0;
while (f<todos.length) {
    document.write(
        `la tache est ${
            todos[f].Text.length > 20 ? "" : "non"
        } complétée, elle contient ${todos[f].Text.length} caractères<br>`

    );
    f++;
}
TAB=[1,2,3,4]

for (let h = 0; h < TAB.length; h++) {
    
    
}