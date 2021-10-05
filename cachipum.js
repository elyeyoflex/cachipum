// Escuchar botones y dispara funciones
var p = document.getElementById("bPiedra");
p.addEventListener("click", piedra);
var pa = document.getElementById("bPapel");
pa.addEventListener("click", papel);
var t = document.getElementById("bTijera");
t.addEventListener("click", tijera);

//escribir en html
var res = document.getElementById("res");
res.innerHTML="";

var cachiCompu;
var cachi;
//funciones de los botones
function piedra(){
  cachi = "piedra";
  random();
  cachipum();
}
function papel(){
  cachi = "papel";
  random();
  cachipum();
}
function tijera(){
  cachi = "tijera";
  random();
  cachipum();
}

//numero aleatorio
function random() {
  var aleatorio;
  aleatorio = Math.floor((Math.random()*3) + 1);
  console.log(aleatorio);
  if (aleatorio == 1){
    cachiCompu = "piedra";
  }else if (aleatorio == 2){
    cachiCompu = "papel";
  }else if (aleatorio == 3){
    cachiCompu = "tijera";
  }else {
    res.innerHTML += "Error la compu no saco nada <br/>";
  }
}
//quien gana?
function cachipum(){
  if (cachi == cachiCompu){
    res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>"
    res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
    res.innerHTML += "<h2>EMPATE</h2><br/>";
  }else if (cachi == "tijera" & cachiCompu =="papel") {
    res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>"
    res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
    res.innerHTML += "<h2>GANASTE</h2><br/>";
  }else if (cachi == "piedra" & cachiCompu =="tijera") {
    res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>"
    res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
    res.innerHTML += "<h2>GANASTE</h2><br/>";
  }else if (cachi == "papel" & cachiCompu =="piedra") {
    res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>"
    res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
    res.innerHTML += "<h2>GANASTE</h2><br/>";
  }else if (cachi == "tijera" & cachiCompu =="piedra") {
    res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>"
    res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
    res.innerHTML += "<h2>PERDISTE</h2><br/>";
  }else if (cachi == "piedra" & cachiCompu =="papel") {
    res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>"
    res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
    res.innerHTML += "<h2>PERDISTE</h2><br/>";
  }else if (cachi == "papel" & cachiCompu =="tijera") {
    res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>"
    res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
    res.innerHTML += "<h2>PERDISTE</h2><br/>";
  }
}
