var boton = document.querySelector("#calc");
function calcCalificacion(){
    var Calificacion1 = parseInt(document.getElementById("Calificacion1").value);
    let Calificacion2 = parseInt(document.getElementById("Calificacion2").value);
    let Calificacion3 = parseInt(document.getElementById("Calificacion3").value);
    let Calificacionexamenfinal = parseInt(document.getElementById("Calificacionexamenfinal").value);
    let Calificaciontrabajofinal = parseInt(document.getElementById("Calificaciontrabajofinal").value);
    let nf = (((Calificacion1 + Calificacion2 + Calificacion3)/3) *0.55) + (Calificacionexamenfinal *0.30)+(Calificaciontrabajofinal * 0.15);
    document.getElementById("resultado").innerHTML= nf.toFixed(2);    
    document.getElementById("resul").style.display = "block";

}
function test(){
    console.log("dah");
}
boton.onclick = calcCalificacion;

