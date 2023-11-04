var temp = 300;

setInterval(function(){
  document.getElementById("1").style.height = "0px";
  document.getElementById("2").style.height = "0px";
  document.getElementById("3").style.height = "0px";
  document.getElementById("4").style.height = "100vh";
}, temp+400);

setInterval(function(){
  document.getElementById("1").style.height = "0px";
  document.getElementById("2").style.height = "0px";
  document.getElementById("3").style.height = "100vh";
  document.getElementById("4").style.height = "0px";
}, temp+300);

setInterval(function(){
  document.getElementById("1").style.height = "0px";
  document.getElementById("2").style.height = "100vh";
  document.getElementById("3").style.height = "0px";
  document.getElementById("4").style.height = "0px";
}, temp+200);

setInterval(function(){
  document.getElementById("1").style.height = "100vh";
  document.getElementById("2").style.height = "0px";
  document.getElementById("3").style.height = "0px";
  document.getElementById("4").style.height = "0px";
}, temp+100);




