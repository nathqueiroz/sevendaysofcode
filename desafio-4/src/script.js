let chute = '';
let numero = 8;
let acertou = false;

for (let contador = 0; contador < 4; contador++) {
  chute = prompt("Tente adivinhar o número de 0 a 10:");
  if (chute == numero) {
    alert("Parabéns, você acertou!");
    acertou = true;
    break;
  } 
  alert("Errado, tente novamente!");
}
