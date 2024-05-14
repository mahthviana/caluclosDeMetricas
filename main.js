// por enquanto vai ser so javascript depois vou fazer com html e css

// lógica para feed

let direct, stories, comentarios, compartilhamentos, salvamentos, curtida

// colocar valores dos "agentes de engajamento"
curtida = parseInt(prompt("Digite a quantidade de curtidas: "))
salvamentos = parseInt(prompt("Digite a quantidade de salvamentos: "))
compartilhamentos = parseInt(prompt("Digite a quantidade de compartilhamentos: "))
comentarios = parseInt(prompt("Digite a quantidade de comentarios: "))
stories = parseInt(prompt("Digite a quantidade de stories: "))
direct = parseInt(prompt("Digite a quantidade de direct: "))

//calculo de engajamento para feed
let calculo = ((curtida * 1) + (salvamentos * 1.2) + (compartilhamentos * 1.4) + (comentarios * 1.6) + (stories * 1.8) + (direct * 2)) / 7.4


// media de engajamento
console.log(calculo)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// calculo de engajamento em um post
let reacoes, alcance, calcEngaj

reacoes = parseInt(prompt("Digite a quantidade de reações de um post: "))
alcance = parseInt(prompt("Digite a quantidade de alcance de um post: "))

// calculo dado em porcwntagem sobre o engajamento de um post
calcEngaj = (reacoes/alcance) * 100
console.log(`O Número de engajamento no post foi ${calcEngaj}%`)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// calculo de engajamento do story 
let numSeguidores, visualizacoes

numSeguidores = parseInt(prompt("Digite sua quantidade de seguidores: "))
visualizacoes = parseInt(prompt("Digite a média de visualizações dos seus storys: "))


engajStory = (visualizacoes/numSeguidores) * 100
console.log(`O engajamento de story ${engajStory}%`)