const botoesDeMesas = document.querySelectorAll(".mesa-btn"); 
const mesaSelecionada = document.querySelector("#mesa-selecionada");

const pedidoForm = document.querySelector("#pedido-form");
const registrarResponsavelBtn = document.querySelector("#reg-responsavel");
const responsavelInput = document.querySelector("#responsavel");


botoesDeMesas.forEach(function(mesa) {
    mesa.addEventListener("click", function () {

        console.log(`${mesa.textContent} foi clicada`);

        mesaSelecionada.textContent = mesa.textContent;
    });
});


registrarResponsavelBtn.addEventListener("click", function () {

    console.log(`Responsável registrado: ${responsavelInput.value}`);

    if (responsavelInput.value.trim() === "") {
        alert("Por favor, insira o nome do responsável.");
        return;
    }

    else {
        alert(`Responsável registrado: ${responsavelInput.value}`);
    }

    registrarResponsavelBtn.disabled = true;
    responsavelInput.disabled = true;
});

