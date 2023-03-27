let item = "";
let categoria = "";
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

let adicionaMais = "sim";
while(adicionaMais != "não") {
  adicionaMais = prompt("Deseja acrescentar mais algum item na lista de compras? Digite 'sim' ou 'não'");

while (adicionaMais != "sim" && adicionaMais != "não"){
    alert('Ops, deu algum erro!');
    adicionaMais = prompt("Deseja acrescentar mais algum item na lista de compras? Digite 'sim' ou 'não'");
  }  
  
  if (adicionaMais === "não") {
    break;
  }
  
  item = prompt("Qual comida você deseja inserir?");
  categoria = prompt("Em qual categoria esse item pertence? Ex: 'frutas', 'laticínios' 'doces' ou 'congelados' ?");
  if(categoria === 'frutas') {
    frutas.push(item);
  } else if ( categoria === 'laticionios') {
    laticinios.push(item);
  } else if (categoria === 'doces') {
    doces.push(item);
  } else if(categoria === 'congelados') {
    congelados.push(item);
  } else {
    alert("Essa categoria não foi definida.")
  }
  
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
