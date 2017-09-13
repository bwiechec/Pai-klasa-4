function witaj(imie){
    document.write('Witaj ' + imie);
}


var name = 'Maciej'
witaj(name);

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