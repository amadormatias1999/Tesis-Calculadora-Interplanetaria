
var boton = document.getElementById ( "calcular-peso");
boton.addEventListener("click" , calculo);
var gravedad_tierra=9.8;

function calculo ()
{
    var peso = document.getElementById("peso-usuario").value;
    var selectorplaneta = document.getElementById("planetas").value;
    var peso_final= peso * selectorplaneta / gravedad_tierra;
    document.getElementById("resultado").innerHTML = "Tu peso seria de:  " + parseInt (peso_final) + " Kilos ";
}
