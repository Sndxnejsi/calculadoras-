export default function imc(){

    // Identificar o botão e a div do resultado
    const botaoImc = document.getElementById("calcularImc")
    const resultadoImc = document.querySelector("#resultadoImc")
    alert("edrwerew")
    
    // Adicionar um evento ouvinte no botão
    botaoImc.addEventListener("click", function(){

        // Identificar os valores de peso e altura
        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value

        // Validar entrada dos dados
        if (isNaN(peso) || isNaN(altura) || peso <=0 || altura <=0){
            resultadoImc.innerHTML = "Preencha corretamente o peso e a altura"
            resultadoImc.classList.remove("alertaVermelho","alertaVerde","alertaAmarelo")
            resultadoImc.classList.add("alertaVermelho")
            return
        }

        // Aplicar a fórmula do IMC: peso / (altura * altura)
        const valorImc = peso / (altura * altura)

        /* Interpretação do resultado
            Abaixo 18.5 (Magreza)
            18.5 e 24.9 (Normal)
            25 e 29.9 (Sobrepeso)
            Acima de 29.9 (Obesidade)
        */
       let classificacao
       let cor
       if (valorImc < 18.5) {
            classificacao = "Magreza"
            cor = "alertaVermelho"
        }
        else if(valorImc < 24.9){
            classificacao = "Normal"
            cor = "alertaVerde"
        }
        else if(valorImc < 29.9){
            classificacao = "Sobrepeso"
            cor = "alertaAmarelo"
        }
        else{
            classificacao = "Obesidade"
            cor = "alertaVermelho"
       }

        // Mostrar o resultado para o usuário
        resultadoImc.innerHTML = `IMC: ${valorImc.toFixed(2)} <br>Classificação: ${classificacao}`
        resultadoImc.classList.remove("alertaVermelho","alertaVerde","alertaAmarelo")
        resultadoImc.classList.add(cor)

    })

}