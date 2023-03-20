var nome = prompt('Qual é o seu nome?');

const area = prompt(nome + ", você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt(nome + ", você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt(nome + " você quer aprender C# ou Java?");
}
else {
    alert(nome + " , você não inseriu uma área válida!");
}

let novaLinguagem = prompt("Tem mais alguma linguagem que você gostaria de aprender? Digite 'sim'");
while (novaLinguagem == "sim"){
    let nomeLinguagem = prompt("Qual?");
    alert(nomeLinguagem + "é realmente é muito legal! Continue se empenhando e tudo dará certo.");
}
 alert("Agradeço por participar do nosso Quiz!");