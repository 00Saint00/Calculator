let textTop = document.querySelector("#text-top");
let textBottom = document.querySelector("#text-bottom");

function bye() {
  textTop.innerHTML = "";
  textBottom.innerHTML = "";
}

function button(sum) {
  textTop.innerHTML += sum;
}

function calculate() {
  let context = textTop.innerHTML;
  let calculation = eval(context);
  textBottom.innerHTML = calculation;
}
