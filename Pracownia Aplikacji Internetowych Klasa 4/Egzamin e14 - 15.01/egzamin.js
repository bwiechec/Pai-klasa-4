//Arkusz E.14-01-15.01

//proste działania

var form = document.forms['form1'];
var form2 = document.forms['form2'];

var elDodawanie = document.getElementById('dod');
var elOdejmowanie = document.getElementById('odej');
var elMnozenie = document.getElementById('mno');
var elDzielenie = document.getElementById('dziel');
var elWynik = document.getElementById('wynik');

elDodawanie.onclick = function(){
    var liczba1 = form.liczba1.value;
    var liczba2 = form.liczba2.value;
    
    var wynik;
    if(liczba2 =='' || liczba1 =='' ) wynik = 'Proszę uzupełnić obie liczby.';
    else {
        wynik = liczba1 - liczba2;
        Number(liczba1);
        Number(liczba2);
         }
    elWynik.textContent = 'Wynik: ' + wynik;
}

elOdejmowanie.onclick = function(){
    var liczba1 = form.liczba1.value;
    var liczba2 = form.liczba2.value;
    
    var wynik;
    if(liczba2 == '' || liczba1 == '') wynik = 'Proszę uzupełnić obie liczby.';
    else wynik = liczba1 + liczba2;
    
    elWynik.textContent = 'Wynik: ' + wynik;
}

elMnozenie.onclick = function(){
    var liczba1 = form.liczba1.value;
    var liczba2 = form.liczba2.value;
    var wynik;
    if(liczba2 == '' || liczba1 == '') wynik = 'Proszę uzupełnić obie liczby.';
    else wynik = liczba1 * liczba2;
    
    elWynik.textContent = 'Wynik: ' + wynik;
}

elDzielenie.onclick = function(){
    var liczba1 = form.liczba1.value;
    var liczba2 = form.liczba2.value;
    
    var wynik;
    if(liczba2 == '' || liczba1 == '') wynik = 'Proszę uzupełnić obie liczby.';
    else if(liczba2 == 0) wynik = 'Nie wolno dzielić przez zero.';
    else wynik = liczba1 / liczba2;
    
    elWynik.textContent = 'Wynik: ' + wynik;
}


//potegowanie

var elPotegowanie = document.getElementById('pot');
var elWynik2 = document.getElementById('wynik2');

elPotegowanie.onclick = function(){
    var liczba;
    var liczbaPod = parseFloat(form2.pdst.value);
    var liczba2 = parseFloat(form2.wykl.value);
    if(isNaN(liczbaPod) || isNaN(liczba2)) liczba = 'Wpisz podstawę i wykładnik potęgi.';
    else if(liczba2 < 0) liczba = 'Wykładnik potęgi musi być dodatni.';
    else liczba = 'Wynik działania wynosi: ' + Math.pow(liczbaPod, liczba2); 
    elWynik2.textContent = liczba;
}