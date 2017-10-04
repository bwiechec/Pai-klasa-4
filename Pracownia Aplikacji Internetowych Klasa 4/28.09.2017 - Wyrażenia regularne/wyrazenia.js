//Wyrażenia regularne

//var tekst = 'Zespół Szkół Komunikacji';
//var tekst2 = '6969U69696969';
//var tekst3 = 'ąa';
//var tekst4 = 'test  ';
//var tekst5 = 'tekst@';
//var tekst6 = '.pl';
//var tekst7 = '111';

//var regEx = /Szkół/ - true
//var regEx = /szkół/i; - dzieki 'i' patrzy i na duze i na male litery
//var regEx = /^szkół/i; wyrazenie moze miec dowolna nazwe, ^ aby wyrażenie bylo od przodu patrzone
//var regEx = /^Zespół/i; true
//var regEx = /Zespół$/i; $ patrzy na końcu 
//var regEx = /kacji$/i; true
//var regEx = /^kacji$/i; false
//var regEx = /^Zespół Szkół Komunikacji/i; true
//var regEx = /[a-z]/i; true - sprawdzamy czy jest litera od a do z w ciagu

//****do tekst2****

//var regEx = /[a-z]i/; true
//var regEx = /[a-z]/; false

//***do tekst3**

//var regEx = /[a-z]/; false
//var regEx = /[ąęńśćźżó]/; true
//var regEx = /[ąęńśćźżó]|[a-z]/; | oznacza lub albo warunek po lewej albo po prawej 
//var regEx = /[ąęńśćźżó][a-z]/;

//***do tekst4***

//var regEx = /[a-z]\s/; \oznacza spacje true

//***do tekst5***

//var regEx = /^[a-z]+@/ + powoduje ze @ musi byc gdzie kolwiek po literze
//var regEx = /^[a-z]*@/ * gdy może byc to co przed gwiazdka ale nie musi!
//var regEx = /^[t]?@/ gdy ? moze ale nie musi TYLKO raz w wystapic litera przed @

//***do tekst6***

//var regEx = /[a]{1}/ czy 1 litera a
//var regEx = /[a]{2,3}/ minimum 2 litery a
//var regEx = /\.[a-z]{2,3}/

//***do tekst7***

//var regEx = /./ kropka to dowolny znak
//var regEx = /\w/ //dowolne litery liczby i znak podkreślenia
//var regEx = /\W/ negacja \w
//var regEx = /\d/ //sprawdza czy są cyfry
//var regEx = /\D/ //sprawdza czy nie ma są cyfry
//var regEx = /\s/ //sprawdza czy są spacje
//var regEx = /\S/ //sprawdza czy nie ma spacji
//var regEx = /[a-z][A-Z]/; czy jest pierwsza mała potem duza
//var regEx = /[A-z]/; Wyszukuje duże i małe litery
//var regEx = /(test){2}/; Wyszukuje dwa takie same wyrazenia obok siebie testtest bo to grupa ----- w () wstawiamy grupy

//var sprawdz = regEx.test(tekst);
//var sprawdz2 = regEx.test(tekst2);
//var sprawdz3 = regEx.test(tekst3);
//var sprawdz4 = regEx.test(tekst4);
//var sprawdz5 = regEx.test(tekst5);
//var sprawdz6 = regEx.test(tekst6);
//var sprawdz7 = regEx.test(tekst7);

//console.log(sprawdz);
//console.log(sprawdz2);
//console.log(sprawdz3);
//console.log(sprawdz4);
//console.log(sprawdz5);
//console.log(sprawdz6);
//console.log(sprawdz7);

//https://regex101.com/ WAŻNA STRONKA DO TEMATU


//sprawdź kod pocztowy 

/*var elKod = document.getElementById('kod');
var elWynik = document.getElementById('wynik');
var regEx = /^[\d]{2}-[\d]{3}$/;

function sprawdz(){
var sprawdz = regEx.test(elKod.value);
    if(sprawdz){elWynik.textContent = 'Prawidłowy kod pocztowy';}
    else if(elKod.value == '') {elWynik.textContent ='';}
    else {elWynik.textContent = 'Nieprawidłowy kod pocztowy';}
    
}

elKod.addEventListener('input',sprawdz);*/

//*****************************************************************************

//exec() - zwraca tego stringa który pasuje

var tekst = 'Zespół Szkół Komunikacji';

var regEx = /(Zespół){1}/i;

var sprawdz = regEx.exec(tekst);

console.log(sprawdz);

//match lepsiejsze niz exec()

var pliki = 'plik.mp3 arkusz.csv muzyka.mp3 tekst.txt'

var regEx1 = /(\w+\.mp3)/g;

var sprawdz = pliki.match(regEx1);

console.log(sprawdz);


















