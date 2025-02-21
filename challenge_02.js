/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Bier

--> "Max trinkt Cola."

/* Getränke-Challenge */

let name1;
let age;

name1 = prompt("Bitte den Namen eingeben");
age = parseInt(prompt("Bitte das Alter angeben")); // "2"  --> 2
// console.log(name1 + " ist " + age);

/****** Lösung Herr Schmidt*******/

switch (true) {
    case (age >= 0) && (age <= 5):
        console.log(name1 + " trinkt Milch.");
        break;
    case (age >= 6) && (age <= 12):
        console.log(name1 + " trinkt Saft.");
        break;
    case (age >= 13) && (age <= 17):
        console.log(name1 + " trinkt Cola.");
        break;
    case (age >=18) && (age <= 150):
        console.log(name1 + " trinkt Bier.");
        break;
    default:
        console.log("Bitte Tee trinken!")
        break;
}


/***  Versuch mit if, else if ....else ***/

// if (age <= 5)
// { 
//     console.log(name1 + " trinkt Milch.");
// }
// else if(age <= 12)
// {
//     console.log(name1 + " trinkt Saft.");
// }
// else if(age <= 17)
// {
//     console.log(name1 + " trinkt Cola.");
// }
// else if(age >= 18)
// {
//     console.log(name1 + " trinkt Bier.");
// }
// else(age(),name1())
// {
//     console.log("Keine Ausgabe möglich!");
// }


/** Versuch mit while */
// while (age <= 5) {
//     console.log(name1 + " trinkt Milch.");
// }
// while (age <= 12) {
//     console.log(name1 + " trinkt Saft.");
// }
// while (age <= 17) {
//     console.log(name1 + " trinkt Cola.");
// }
// while (age >= 18) {
//     console.log(name1 + " trinkt Bier.");
// }

