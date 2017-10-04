//Tworzenie obiektu za pomocą literału obiektu

/*var janusz = {
    wzrost: 185,
    waga: 89,
    miejsceUrodzenia: 'Poznań',
    plec: 'm'
};*/

/*console.log(janusz);

document.write(janusz); DUZA ROZNICA DO CONSOLE.LOG()!!!!*/

/*console.log(janusz.wzrost);*/

//utworz obiekt z wlasciwosciami marka, model, predkosc wsywietl(metoda)

/*var autko = {
    marka: 'BMW',
    model: 'Szybki',
    predkosc: 69,
    
    wyswietl(){
       //document.write(this.marka+'<br>'+this.model+'<br>'+this.predkosc+'<br>'); 
       return 'Marka: ' + this.marka; 
    }
};

console.log(autko.wyswietl());*/

//****************************************************************


var ksiazka = {
    tytul: 'PanTadeusz',
    rokWydania: '1834',
    gatunek: 'Poemat epicki',
        autor: {
            imie: 'Adam',
            nazwisko: 'Mickiewicz',
            wyswietlDane(){
                return 'Imie: ' + this.imie + '<br>Nazwisko: ';
            }
        }
}


//console.log(ksiazka.autor.imie);

//console.log(ksiazka['autor']['nazwisko']);

//console.log(ksiazka.autor['nazwisko']);

var klucz = 'imie';

//console.log(ksiazka.autor[klucz]);


//**************************************************************************

//tworzenie pystego obiektu

var produkt = {};

//sprawdzamy czy właściwość istnieje

console.log(typeof(produkt.nazwa)); //undefined

//dodawanie wlasciwosci i metod

produkt.nazwa = 'pralka';
produkt.firma = 'bosh';
produkt.model = 'WAK2024PI';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function(){
    return 'Nazwa produktu: ' + this.nazwa + '<br>Firma: ' + this.firma + '<br>Model: ' + this.model + '<br>Waga: ' + this.waga + '<br>Cena: ' + this.cena+'zł';
}

//console.log(produkt.wyswietl());
document.write(produkt.wyswietl());
console.log(typeof(produkt.nazwa)); // string
console.log(typeof(produkt.waga)); // number
console.log(typeof(produkt.wyswietl)); //function

//DOM PRZEROBIĆ metode wyswietl dla obiektu produkt (forEach albo forIn)

























