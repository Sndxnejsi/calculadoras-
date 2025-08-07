/*
resultado= alcool / gasolina,
se for abaixo de 0.7 - "abasteça no alcool" em verde
 caso contrário, "abasteça na gasolina" em amarelo
*/
 
 
export default function combustivel(){
 
const BotaoCombustivel = document.getElementById("calcularCombustivel")
const resultadoCombustivel = document.getElementById("resultadoCombustivel")
 
BotaoCombustivel.addEventListener("click", function(){
 
    const alcool = document.getElementById("alcool").value
    const gasolina  = document.getElementById("gasolina").value
 
    if (isNaN(alcool)  || isNaN(gasolina) || alcool<=0 || gasolina <=0 ){
        resultadoCombustivel.innerHTML = "Preencher corretamente os dados"
        resultadoCombustivel.classList.remove("alertaVerde","alertaAmarelo","alertaVermelho")
        resultadoCombustivel.classList.add("alertaVermelha")
        return
 
    }
 
    const ValorCombustivel = alcool / gasolina
 
    let classificação
    let cor
   
    if (ValorCombustivel > 0.70){
 
        classificação = "gasolina"
        cor = "alertaAmarelo"
    }
    else {
        classificação = "alcool"
        cor = "alertaVerde"
    }
 
resultadoCombustivel.innerHTML = `Porcentagem: ${ValorCombustivel} <br>Classificação: ${classificação} `
resultadoCombustivel.classList.remove("alertaVerde")
resultadoCombustivel.classList.add(cor)
 
})
}