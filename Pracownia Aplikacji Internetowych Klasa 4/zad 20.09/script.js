var form = document.forms['form1'];



var elPrzycisk = document.getElementById('wyslij');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function(){
    var ilosc = form.ilosc.value;
    var rodzaj = form.rodzaj.value;
    console.log(ilosc);
    console.log(rodzaj);
    
    if(rodzaj == '') rodzaj = '*';
    console.log(ilosc);
    console.log(rodzaj);
    if(!isNaN(ilosc)){
    var i=1;
        var napis = "";
    for(i;i<=ilosc;i++){
        for(j=0;j<i;j++) {
            napis = napis + rodzaj;
                             }
        napis =napis + "<br>";
        console.log(i);
        }
    console.log(i);
        i--;
    for(i;i>0;i--){
        for(j=1;j<i;j++) {
            napis = napis + rodzaj;
                             }
        napis =napis + "<br>";
        }
        elWynik.innerHTML = napis;
    }  
    else if(ilosc == "") elWynik.textContent = "nie wybrałeś liczby gwiazdek";
    else elWynik.textContent = "Nie wybrałeś poprawnie liczby gwiazdek";
}