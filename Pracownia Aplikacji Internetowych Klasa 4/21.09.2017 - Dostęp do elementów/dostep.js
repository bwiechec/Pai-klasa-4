//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'zielony';



//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h1');
if(elNaglowek.length > 0){
    console.log(elNaglowek);
    console.log(elNaglowek.length);
    elNaglowek[0].className = 'czerwony';
}


//Metoda getElementByClassName()

var elCzerwony = document.getElementsByClassName('czerwony');
if(elCzerwony.length > 0){
    console.log(elCzerwony.length);
    
    //wolniejszy sposób
    elCzerwony.item(elCzerwony.length-1).className= 'zielony';
    
    //szybszy sposób
    elCzerwony[elCzerwony.length-1].className = 'zielony';
    
}

//metoda getElementsByName()

var elAuta = document.getElementsByName('auta');
console.log(elAuta);


//Metoda querySelector()
//zwraca pierwsze dopasowanie

/*var elImie = document.querySelector('li#i2');

elImie.className= 'zielony';*/

//metoda querySelectorAll()

/*var elImiona = document.querySelectorAll('li.grey');
console.log(elImiona);
elImiona[0].className = 'zielony';*/



//ZAD DOM ZMIEN WSZYSTKIE ELEMENTY W LISCIE Z IMIONAMI NA CZERWONE WYKORZYSTAJ METODĘ FOREACH 

/*var elSzare = document.querySelectorAll('li.grey');

function p(imie){
    imie.className = 'czerwony';
}

elSzare.forEach(p);*/

//previousElementSibling, nextElementSibling 

var poczatekElem  = document.getElementById('ks2');

poczatekElem.className = 'zielony';

var poprzedniElem = poczatekElem.previousElementSibling;

poprzedniElem.className = 'czerwony';

var nastepnyElem = poczatekElem.nextElementSibling;

nastepnyElem.className = 'czerwony';

//firstChild, lastChild

var lista = document.getElementsByTagName('ul')[2];

var pierwszy = lista.firstElementChild;

//pierwszy.className = 'zielony';

var ostatni = lista.lastElementChild;

//ostatni.className = 'czerwony';

pierwszy.setAttribute('class','zielony');

//**************************************************************************

//zmień pierwszy element input na button i przypisz mu wartość wyślij


var input = document.getElementsByTagName('input')[0];

console.log(input);

input.setAttribute('type','button');

input.value = 'Wyślij';


//tekst www laczy ze stroną szkoły zsk

var elA = document.getElementById('link');

elA.setAttribute('href','http://www.zsk.poznan.pl');
elA.setAttribute('target','_blank');


