var operacao = prompt(
  "Qual operação deseja realizar?: \n1-Adição \n2-Subtração \n3-Multiplicação \n4-Divisão \n5-Sair"
);

while (
  operacao != "1" &&
  operacao != "2" &&
  operacao != "3" &&
  operacao != "4" &&
  operacao != "5"
) {
  alert("Favor digitar uma operação válida.");
  var operacao = prompt(
    "Você deseja calcular: \n1-Adição \n2-Subtração \n3-Multiplicação \n4-Divisão \n5-Sair"
  );
}

if (operacao === "5") {
  alert("Até a próxima!");
} else {
  var numero1 = prompt("Digite o primeiro número da sua opereção:");
  var numero2 = prompt("Digite o segundo número da sua opereção:");

  if (operacao === "1") {
    var calculo = soma(numero1, numero2);
    var resultado = alert("Seu resultado é " + calculo);
  } else if (operacao === "2") {
    var calculo = subtracao(numero1, numero2);
    var resultado = alert("Seu resultado é " + calculo);
  } else if (operacao === "3") {
    var calculo = multiplicacao(numero1, numero2);
    var resultado = alert("Seu resultado é " + calculo);
  } else if (operacao === "4") {
    var calculo = divisao(numero1, numero2);
    var resultado = alert("Seu resultado é " + calculo);
  }
}

//funcoes:
function soma(numero1, numero2) {
  return Number(numero1) + Number(numero2);
}
function subtracao(numero1, numero2) {
  return Number(numero1) - Number(numero2);
}
function multiplicacao(numero1, numero2) {
  return Number(numero1) * Number(numero2);
}
function divisao(numero1, numero2) {
  return Number(numero1) / Number(numero2);
}