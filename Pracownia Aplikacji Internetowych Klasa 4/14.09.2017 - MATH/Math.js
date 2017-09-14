var elBlok = document.getElementById('blok');

var form = document.forms['form'];

var x = Math.PI;

console.log(x);

function pi(){
    var wybor = Number(form.wybor.value);
    
    switch(wybor){
        case 1:
            elBlok.innerHTML = x;
            break;
        case 2:
            elBlok.innerHTML = 'NIC XD';
            break;
        default:
            elBlok.innerHTML = 'NAWET NIC NIE WYBRALES!@! XD';
            break;
    }
}


//Math.sqrt()


var pierwiastek = Math.sqrt(25);
console.log(pierwiastek);


//round, min, max

var a = 13.2;
var b = 28.5;

var minimalna = Math.min(a,b);
var maksymalna = Math.max(a,b);
var roundA = Math.round(a);
var roundB = Math.round(b);


console.log('Minimalna ' + minimalna);
console.log('Maksymalna ' + maksymalna);
console.log('A zaokraglone ' + roundA);
console.log('B zaokraglone ' + roundB);

