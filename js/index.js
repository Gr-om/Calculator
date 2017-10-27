var calculator = document.querySelector(".calculator");
var saisie = "";
var zoneSaisie = document.querySelector(".result");

calculator.addEventListener("click", affiche);

function affiche(event) {
  var target = event.target;

  if (target.classList.contains("reset")) {
    saisie = "0";
    zoneSaisie.innerText = saisie;
    
  } else if (target.classList.contains("equal")) {
    
    zoneSaisie.innerText = eval(saisie);
    
  } else {
    var click = target.innerText;
    saisie += click;
    zoneSaisie.innerText = saisie;
  }
}