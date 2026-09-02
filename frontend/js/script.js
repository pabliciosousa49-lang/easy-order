const botoesDeMesas = document.querySelectorAll(".mesa-btn"); 
const mesaSelecionada = document.querySelector("#mesa-selecionada");

botoesDeMesas.forEach(function(mesa) {
    mesa.addEventListener("click", function () {

        console.log(`${mesa.textContent} foi clicada`);

        mesaSelecionada.textContent = mesa.textContent;
    });
});


