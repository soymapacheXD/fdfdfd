paises = [];
function enviar(){
    var paises2 = [];
    for ( i = 1; i <= 4; i++) {
    var pais1 = document.getElementById(i).value;
    paises.push(pais1);    
    }
    document.getElementById("paseo").innerHTML = paises;
    for ( j = 0; j < paises.length; j++) {
    paises2.push ("<h4>pais"+paises2[j]+"</h4>")       
    }
    document.getElementById("ver").innerHTML=paises2;
}
function ordenar (){
    paises.sort();
    document.getElementById("paseo").innerHTML = paises
}
