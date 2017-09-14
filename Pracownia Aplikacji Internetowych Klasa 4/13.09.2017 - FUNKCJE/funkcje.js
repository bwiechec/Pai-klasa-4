/*function witaj(imie){
    document.write('Witaj ' + imie);
}


var name = 'Maciej'
witaj(name);*/

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

/*var a = 5, b=5, h =6;

function poleObjetosc(a,b,h){
    var pole = a * b;
    var objetosc = pole * h;
    var wynik = [pole, objetosc];
    return wynik;
}


console.log(poleObjetosc(a,b,h));

var pole = poleObjetosc(a,b,h)[0];
var objetosc = poleObjetosc(a,b,h)[1];*/


//document.write("<br>pole: " + pole + " objetosc: " + objetosc);


/*
var coChcesz = prompt("Chcesz pole czy objętosc prostokąta","0-pole 1-objetosc");
if(coChcesz == 1) document.write('<br>Objetosc wynosi: ' + objetosc);
if(coChcesz == 0) document.write('<br>Pole wynosi: ' + pole);*/


/*zad. napisac skrypt obliczający pole, obwód oraz objętość stożka.
Dane użytkownik podaje z klawiatury. 
wykorzytstaj obiekt Math. użytkownik za pomocą radio wybiera 
co chce obliczyc dane dodaje w formularzu
dane wyswietl w bloku strony*/

var wynik;

var pi = Math.PI;
console.log(pi);

var doc = document.getElementById;

function zadaniePoleITP(){
    
    
    var promien = document.getElementById('r').value;
    console.log(promien);
    var wysokosc = document.getElementById('h').value;
    console.log(wysokosc);
    
    Number(promien);
    Number(wysokosc);
        if(co1.checked == true){
            
            wynik = pi * (promien*promien);
            console.log(wynik);
            
        }
            
            
        if(co2.checked == true){
            
             wynik = 2 * pi *promien;
            console.log(wynik);
            
        }
            
        if(co3.checked == true){
            
             wynik = 1/3*(pi * (promien*promien) * wysokosc);
              console.log(wynik);
            
         }
            
        else if(co1.checked != true && co2.checked != true && co3.checked != true) document.write('Nie wybrałeś nic!!!');
            
    document.getElementById('wynikDzialania').innerHTML = 'Wynik działania: '+wynik;
}




