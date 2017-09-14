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
var wiek1 = 18;
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

var podane = [];

for(var x = 0; x<5; x++){
    do{
        podane[x] = prompt("Podaj liczbę podzielna przez 2");
    }while(podane[x]%2!=0)
}

document.write(podane);

