var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elHaslo = document.getElementById('haslo');
var elHaslo2 = document.getElementById('haslo2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikat');

elKomunikat.style.color = 'red';

//onload()

/*window.onload = function(){
    alert('witaj');
}*/
/*elImie.onblur = function(){
    if(elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = "Błędne dane";
    }
}*/

/*function sprawdz(){
    if(elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = "Błędne dane";
    }
}*/

function sprawdz(){
    if(this.value.length > 2 && this.value.length < 10){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = "Błędne dane";
        this.focus();
    }
}

function blokujMail(){
    elMail2.disabled = false;
    elMail1.disabled = true;
    elMail2.focus();
}

function mail(){
    if(elMail1.value != this.value){
        //rozne
        elKomunikat.textContent = "Różne maile";
        elMail1.value = '';
        this.value = '';
        this.disabled = true;
        elMail1.disabled = false;
        elMail1.focus();
        
    }else{
        //takie same
        elKomunikat.textContent = '';
        elMail1.disabled = true;
        this.disabled = true;
        
    }
}

function blokujHaslo(){
    elHaslo2.disabled = false;
    elHaslo.disabled = true;
    elHaslo2.focus();
}
function haslo(){
    if(elHaslo.value != this.value){
        //rozne
        elKomunikat.textContent = "Różne hasla";
        elHaslo.value = '';
        this.value = '';
        this.disabled = true;
        elHaslo.disabled = false;
        elHaslo.focus();
        
    }else{
        //takie same
        elKomunikat.textContent = '';
        elHaslo.disabled = true;
        elHaslo2.disabled = true;
        
    }
}

function regulamin(){
    if(elRegulamin.checked){
    elPrzycisk.disabled = false;
        }else{
            elPrzycisk.disabled = true;
        }
}
function zatwierdz(){
   document.write('<div>');
   /*document.write('Imie: '+'<span class="kolor">'+elImie.value + '</span><br>');
   document.write('Nazwisko: '+'<span class="kolor">'+elNazwisko.value'</span><br>');
   document.write('Login: '+'<span class="kolor">'+elLogin.value + '</span><br>');
   document.write('Mail: '+'<span class="kolor">'+elMail1.value + '</span><br>');
   document.write('Data urodzenia: '+'<span class="kolor">'+elData.value + '</span><br>');*/
   document.write('</div>');
}

function popraw(){
    var zablokowane = document.querySelectorAll('input[disabled]');
    if(zablokowane.length > 0){
        for(var i = 0; i < zablokowane.length; i++){
            zablokowane[i].disabled = false;
        }
    }
}

elImie.addEventListener('blur', sprawdz);
elNazwisko.addEventListener('blur', sprawdz);
elLogin.addEventListener('blur', sprawdz);
elMail1.addEventListener('blur', blokujMail);
elMail2.addEventListener('blur', mail);
elHaslo.addEventListener('blur', blokujHaslo);
elHaslo2.addEventListener('blur', haslo);
elRegulamin.addEventListener('click', regulamin);
elPrzycisk.addEventListener('click', zatwierdz);
elPopraw.addEventListener('click', popraw);