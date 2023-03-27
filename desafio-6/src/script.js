let categoria = "";
let remover = "";
let item = "";
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];



let adicionarMais = "sim";
while(adicionarMais != "não"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionarMais = prompt("Deseja adicionar mais um item à lista? Responda 'sim' ou 'não'.");
    } else {
        adicionarMais = prompt("Deseja adicionar mais um item à lista?  Responda 'sim', 'não' ou 'remover'.");
    }
	
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {
	alert(`Ops, algo aconteceu!`);
        adicionarMais = prompt("Deseja adicionar mais um item à lista? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){
	break;
    }
	
    if(adicionarMais === "sim"){
        item = prompt("Qual item deseja inserir?");
        categoria = prompt("Em qual categoria essa item pertence: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(item);
        } else if (categoria === 'laticínios'){
            laticinios.push(item);
        } else if (categoria === 'doces'){
            doces.push(item);
        } else if (categoria === 'congelados'){
            congelados.push(item);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    } else if(adicionarMais === "remover"){
	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
		alert(`Eita, a lista está vazia!`);
	} else {
		remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);