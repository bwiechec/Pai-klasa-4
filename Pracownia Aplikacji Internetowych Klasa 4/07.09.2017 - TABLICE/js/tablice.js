//document.write('test');

//TWORZENIE TABLICY ZA POMOCĄ LITERAŁU TABLICY

var kolory;

kolory = ['czerwony','zielony','biały','czarny'];

var elkolor = document.getElementById('kolor');

elkolor.textContent = kolory[0];

//TWORZENIE TABLICY ZA POMOCĄ KONSTRUKTORA TABLICY Array()

var samochody = new Array('PASSAT!@!@!#!@#',
                          'GOLF',
                          'BMW',
                          'MAJBACH'); //KONSTRUKTORY PISZEMY Z DUZEJ LITERY

console.log(samochody[0]);
console.log(samochody[samochody.length-1]);

document.write('Ilosc elementów w tablicy: '+samochody.length);

samochody[0] = prompt("podaj marke samochodu");

console.log(samochody);

//tablice wielowymiarowe

var tab = new Array(
Array('Jan','Nowak','Poznan'),
Array('Adam','Kowal','Gniezno'),
Array('Agata','Nowak','Poznan')
);

console.log(tab);

document.write(tab[1][2]);

var imiona= ['Janusz','Andrzej','Marta'];

console.log(imiona);

var posortowane = imiona.sort();

console.log(posortowane);

//odwracanie tablicy


var odwrotnoscTablicy = posortowane.reverse();

console.log(odwrotnoscTablicy);

console.log(imiona);

imiona.pop(); //usuwa ostatni

console.log(imiona);

imiona.shift();//usuwa pierwsze

console.log(imiona);

imiona.unshift('xDDD');//dodaje element na początek tablicy

console.log(imiona);

imiona.push('Hubert'); // dodaje cos na koniec

console.log(imiona);

//sprawdzenie czy element jest w tablicy

console.log(imiona.indexOf('Marta')); //1 jak istnieje -1 jak nie istnieje


//tablica z liczbami
var cyfry = [1,2,20,190,-1];

console.log(cyfry);
console.log(cyfry.sort()); //sortuje głupio
cyfry.sort(     //dobrze sortuje !!!!!!!!!!!!!!!!!!!!!!!
function(a,b){
    return(a-b);
}
)

console.log(cyfry);

var kolory2;

function wypisz(){
    
    var elkolor1 = document.getElementById('k1').value;
    var elkolor2 = document.getElementById('k2').value;
    var elkolor3 = document.getElementById('k3').value;
    
    kolory2 = [elkolor1,elkolor2,elkolor3];
    
    console.log(kolory2);
}


