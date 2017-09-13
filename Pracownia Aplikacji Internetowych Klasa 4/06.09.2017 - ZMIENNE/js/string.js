//document.write('test');

var tekst = 'ZSK - Zespół Szkół Komunikacji';

console.log(tekst.length); //30

var pierwszy = tekst.charAt(0); //wybieramy pierwszy znak tekstu

var ostatni = tekst.charAt(tekst.length - 1); //wybieramy ostatni znak tekstu

console.log(pierwszy);

console.log(ostatni);

document.write(tekst.charAt(11));

document.write(" "+tekst.charCodeAt(0)); //Z

document.write(tekst.charCodeAt(0) + 32); //z

//zamiana na duże litery

var duze = tekst.toUpperCase();//ZSK - ZESPÓŁ SZKÓŁ KOMUNIKACJI

document.write('<br>' + duze);

//zamiana na małe litery

var male = tekst.toLowerCase(); //zsk - zespół szkół komunikacji

document.write('<br>' + male);

var duzaMale = tekst.charAt(0).toUpperCase() + tekst.slice(1).toLowerCase();
//slice to wycięcie od danego znaku 
console.log(duzaMale);

//podanie z klawiatury imienia zamiana pierwszego znaku na dużą literę a reszta na małą wyswietl wszystko w nagłówku h2 w kolorze niebieskim

var imieUser = prompt('Podaj swoje imie','np. Maciej');

var imieValid = imieUser.charAt(0).toUpperCase() + imieUser.slice(1).toLowerCase();

var naglowek2 = document.getElementById('naglowek2');

naglowek2.innerHTML = imieValid;

naglowek2.style.color = "blue";

console.log(imieValid.substr(1,imieValid.length-2))// (od którego indeksu ile , ile wprzód wycinamy)