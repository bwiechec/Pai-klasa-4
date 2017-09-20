/*for(var i = 0; i < 10; i++){
    document.write(i+ ' ');
    if(i==7){
        break;
    }
}

for(var i = 1; i <=10; i++){
    if(i==1){
        document.write('<br>' + i + " raz <br>"); 
    }else{
        document.write(i + " razy <br>");
    }
}*/

/*
uzytkownik podaje z klawiatury wartosc poczatkowa i koncowa petli,
    po kazdej liczbie dodaj przecinek, a tylko po ostatniej 
    liczbie podaj kropke. pierwsza liczba musi byc mniejsza od drugiej*/


/*
var x = prompt("Podaj pierwszą liczbę", "np. 1");
var y = prompt("Podaj drugą liczbę (musi byc wieksza od pierwszej)", "np. 2");

x = Number(x);
y = Number(y);


for(x;x<=y;x++){
    if(x==y){
        document.write(x+".");
    }else{
        document.write(x +", ");
    }
}
*/

//petla while

/*
var i = 0;

while(i++ < 5){
    document.write(i + '<br>');
}
*/
//var wiek1 = 18;
/*var wiek = prompt('Podaj wiek: ');



while(wiek != wiek1){
    var wiek = prompt('Podaj wiek: ');
    
}
if(wiek == wiek1){
        document.write('Masz 18 lat');
    }*/


// do while

/*
do{
    
    var wiek = prompt('Podaj wiek: ');
    if(wiek == wiek1){
        document.write('Masz 18 lat');
    }
    
}while(wiek != wiek1)
*/


/*podaj 5 liczb podzielnych przez 2 z klawiatury. 
zapisz je do tablicy i wyswietl na stronie.*/

/*var podane = [];

for(var x = 0; x<5; x++){
    do{
        podane[x] = prompt("Podaj liczbę podzielna przez 2");
    }while(podane[x]%2!=0)
}

document.write(podane);*/

//uzytkownik podaje z klawiatury liczbe zabezpiecz przed podaniem litery, lub znaku specjalnego
/*for(var i=0;i<10;i++){ 
document.write('<input type="text" id="liczba'+ i +'"> <br>');
}
document.write('<button id="przycisk">Wyślij</button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');


elPrzycisk.onclick = function (){
    var wartosc = elLiczba.value;
    if(!isNaN(wartosc)){
        console.log(wartosc);
    }
}*/

//program wyświetlający liczby 1-10 w pieciu rzędach. po kazdej liczbie ma być przecinek a po ostatniej w kazdym rzędzie ma byc kropka.

/*for(var i = 0; i<5;i++){
    for(var j=1;j<=10;j++){
        if(j==10)document.write(j+'.');
        else document.write(j+", ");
    }
    document.write('<br>');
}*/


//dom uzytkownik podaje z klawiatury maksymalna ilosc gwiazdek zrob petle w ktorej zabezpieczysz przed podaniem błędnych danych użytkownik moze rownież w formularzu podac inny znak jaki chce wyświetlić na ekranie

//dla chetnych jeszcze zeby bylo lustrzane odbicie tego




//użytkownik podaje login i hasło z klawiatury. Jeśli login to janusz a hasło to okoń na ekranie wyświetli sie w kolorze czerwonym hasło. Jeśli hasło będzie błędne to w kolorze niebieskim wyświetli się: Błędne hasło



var elLogin = document.getElementById('login'); 
var elHaslo = document.getElementById('haslo'); 
var elPrzycisk = document.getElementById('loguj');
var elWynik = document.getElementById('wynik');


elPrzycisk.onclick = function (){
    var login = elLogin.value;
    var haslo = elHaslo.value;
    
    if(login=='Janusz' && haslo=='okoń'){
        elWynik.style.color = 'red';
        elWynik.textContent = haslo;
    }
    else{
        elWynik.style.color = 'blue';
        elWynik.textContent = 'Błędne hasło'; 
    }
}








