/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

let name1;
let alter1;

name1 = prompt("Bitte den Namen eingeben");
alter1 = prompt("Bitte das Alter angeben");
// console.log(name1 + " ist " + alter1);

if (alter1<=5)
{ 
    console.log(name1 + " trinkt Milch.");
}
else if(alter1<=12)
{
    console.log(name1 + " trinkt Saft.");
}
else if(alter1<=17)
{
    console.log(name1 + " trinkt Cola.");
}
else if(alter1>=18)
{
    console.log(name1 + " trinkt Bier.");
}