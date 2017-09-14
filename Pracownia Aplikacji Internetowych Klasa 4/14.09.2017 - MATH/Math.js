var elBlok = document.getElementById('blok');

var form = document.forms['form'];

var zmPi = Math.PI;

console.log(x);

function pi(){
    var wybor = Number(form.wybor.value);
    
    switch(wybor){
        case 1:
            elBlok.innerHTML = zmPi;
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


var zaokMin = Math.round(minimalna);

console.log('Minimalna zaokraglona '+zaokMin)



//abs, round, floor

var x = -56; 
var y = -13.1;
var z = 14.9;

var wartBezwzglX = Math.abs(x); //56
var wartBezwzglY = Math.abs(y); //13.1
var wartBezwzglZ = Math.abs(z); //14.9

console.log(wartBezwzglX);
console.log(wartBezwzglY);
console.log(wartBezwzglZ);


var roundX = Math.round(x); //-56
var roundY = Math.round(y); //-13
var roundZ = Math.round(z); //15

console.log(roundX);
console.log(roundY);
console.log(roundZ);


var floorX = Math.floor(x); //-56
var floorY = Math.floor(y); //-14
var floorZ = Math.floor(z); //14

 
console.log(floorX);
console.log(floorY);
console.log(floorZ);


//potęgowanie

var p = Math.pow(2,10);

console.log(p);

//random

var losuj = Math.random(); // od 0 do 1

console.log(losuj);

 //z przedziału od 0 do 10

var rand = Math.random() * 10;

var randRound = Math.round(rand);

 //z przedziału od 0 do 10 v2

var rand2 = Math.random() * 11;

var randFloor = Math.floor(rand2);

console.log(randRound);
console.log(randFloor);




//losowanie 10 liczb

var liczby = new Array();

for(var i=0; i<10;i++){
    liczby[i] = Math.round(Math.random() * 90 + 10);
}

console.log(liczby);






