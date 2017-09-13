var loginTab = new Array();
var hasloTab = new Array();

function zapisz(){
    
    var login=document.getElementById('login').value;
    var haslo=document.getElementById('haslo').value;
    
    loginTab.push(login);
    hasloTab.push(haslo);
    
    
    console.log(loginTab);
    console.log(hasloTab);
}