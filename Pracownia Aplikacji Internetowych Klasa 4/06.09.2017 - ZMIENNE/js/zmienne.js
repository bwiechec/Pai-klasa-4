//document.write('zmienne');
console.log('test');

var osoba = {
    imie: "Maciej",
    nazwisko: "Trybuś",
    wiek: 19,
};

document.write(osoba.imie+" "+osoba.nazwisko+" lat: "+osoba.wiek);
var wiekStudent = 21;
var sredniWiek = (osoba.wiek + wiekStudent) /2;

document.write('<br> Średni wiek ' + sredniWiek);

var a=5, b="3";

document.write("<br>"+10/3);

var oblicz = (a-2)/b;

console.log(oblicz);

var c=10;

var d= 2.5;

console.log(typeof(c));
console.log(typeof(d));

var dziesietna = 20;
var oktalna = 020;
var hex = 0x30;
console.log(dziesietna); //20
console.log(oktalna); //16
console.log(hex); //48

console.trace(); //miejsce w którym jestesmy

var zmienna = true;
console.log(typeof(zmienna));

var j = 'trybus';
console.log(typeof(j));

 j=parseInt(j);

console.log(typeof(j));
console.log(j);

var wiek = prompt("Podaj swoj wiek: ","np. 20");
var kolor = prompt("Podaj kolor: (po angielsku)","np. green");

//document.getElementById('naglowek').innerHTML = wiek;

var naglowek = document.getElementById('naglowek');

naglowek.innerHTML=wiek;

naglowek.style.color = kolor;

