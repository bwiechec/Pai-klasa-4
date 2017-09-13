function witaj(imie){
    document.write('Witaj ' + imie);
}


var name = 'Maciej'
witaj(name);

/*
var pole;

var a = prompt("podaj bok a",'np. 2');
var b = prompt("podaj bok b",'np. 2');

parseInt(a);
parseInt(b);

function poleProstokata(x,y){
    pole = x * y;
    return pole;
}

poleProstokata(a,b);

document.write("<br> pole prostakata " + pole);
*/

var a = 5, b=5, h =6;

function poleObjetosc(a,b,h){
    var pole = a * b;
    var objetosc = pole * h;
    var wynik = [pole, objetosc];
    return wynik;
}


console.log(poleObjetosc(a,b,h));

var pole = poleObjetosc(a,b,h)[0];
var objetosc = poleObjetosc(a,b,h)[1];


//document.write("<br>pole: " + pole + " objetosc: " + objetosc);



var coChcesz = prompt("Chcesz pole czy objętosc prostokąta","0-pole 1-objetosc");
if(coChcesz == 1) document.write('<br>Objetosc wynosi: ' + objetosc);
if(coChcesz == 0) document.write('<br>Pole wynosi: ' + pole);


/*zad. napisac skrypt obliczający obwód oraz objętość stożka.
Dane użytkownik podaje z klawiatury. 
wykorzytstaj obiekt Math. użytkownik za pomocą radio wybiera 
co chce obliczyc dane dodaje w formularzu
dane wyswietl w bloku strony*/

var doc = document.getElementById;

function zadaniePoleITP(){
    
    var coliczyc = doc(co).value;
    
    switch(coliczyc){
        case 1:
            
            break;
            
            
        case 2:
            
            
            break;
            
        case 3:
            
            break;
            
        default:
            document.write('Nie wybrałeś nic!!!');
            
    }
    
}



