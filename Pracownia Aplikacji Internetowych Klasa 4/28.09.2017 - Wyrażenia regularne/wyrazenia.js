//Wyrażenia regularne

var tekst = 'Zespół Szkół Komunikacji';
var tekst2 = '6969U69696969';
var tekst3 = 'ąa';
var tekst4 = 'test  ';
var tekst5 = 'tekst@';
var tekst6 = '.pl';
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
var regEx = /\./


//var sprawdz = regEx.test(tekst);
//var sprawdz2 = regEx.test(tekst2);
//var sprawdz3 = regEx.test(tekst3);
//var sprawdz4 = regEx.test(tekst4);
//var sprawdz5 = regEx.test(tekst5);
var sprawdz6 = regEx.test(tekst6);

//console.log(sprawdz);
//console.log(sprawdz2);
//console.log(sprawdz3);
//console.log(sprawdz4);
//console.log(sprawdz5);
console.log(sprawdz6);

