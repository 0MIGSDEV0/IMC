function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let alturaInput = document.getElementById("altura").value;
    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let atividade = parseFloat(document.getElementById("atividade").value);

    if (!peso || !alturaInput || !idade) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    let altura = parseFloat(alturaInput) / 100;

    if (altura <= 0) {
        alert("Altura inválida!");
        return;
    }

    // IMC
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    // TMB
    let tmb;
    if (sexo === "homem") {
        tmb = 10 * peso + 6.25 * (altura * 100) - 5 * idade + 5;
    } else {
        tmb = 10 * peso + 6.25 * (altura * 100) - 5 * idade - 161;
    }

    let gasto = tmb * atividade;

    document.getElementById("resultado").innerHTML = `
        <h2>Resultado</h2>
        <p><strong>IMC:</strong> ${imc.toFixed(2)} (${classificacao})</p>
        <p><strong>TMB:</strong> ${tmb.toFixed(0)} kcal</p>
        <p><strong>Gasto diário:</strong> ${gasto.toFixed(0)} kcal</p>
    `;
}

// garante que o botão funcione
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCalcular").addEventListener("click", calcular);
});
