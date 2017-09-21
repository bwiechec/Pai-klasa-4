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

var elSzare = document.querySelectorAll('li.grey')

function p(a){
    a.className = 'czerwony';
}

elSzare.forEach(p);
