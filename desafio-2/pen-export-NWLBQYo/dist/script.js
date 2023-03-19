const nome = prompt('Qual é o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem você está se dedicando no momento?');
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
if (gosta == 1){
    alert("Muito bom! Continue se empenhando e você alcançará");
}
if (gosta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}