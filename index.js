let botoonCalculate = document.getElementById("botoonCalculate");

function calculateIMC () {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value/100;
  let resultIMC = document.getElementById("resultIMC");
  
  if (weight == "" || height == "") {
    resultIMC.textContent = "No one field can be empty."
  }
  else {
    let imc = (weight/(height*height)).toFixed(2);    
    let message = "";

    if (imc < 18.5) { message = "You are underweight. :/"; }
    else if (imc < 25) { message = "You got an ideal weight! c:"; }
    else if (imc < 30) { message = "You are slightly overweight. :/"; }
    else if (imc < 40) { message = "Watch out! Grade II obesity. :o"; }
    else { message = "Watch out! Grade III obesity. :o"; }
    
    resultIMC.textContent = `Your IMC is ${imc}. ${message}`; 
  }
}

botoonCalculate.addEventListener("click", calculateIMC);