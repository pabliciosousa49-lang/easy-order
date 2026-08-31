const botoesDeMesas = document.querySelectorAll(".mesa-btn"); 
const mesaSelecionada = document.querySelector("#mesa-selecionada");

botoesDeMesas.forEach(function(mesa) {
    mesa.addEventListener("click", function () {

        console.log("Mesa 1 foi clicada"); 

        mesaSelecionada.textContent = mesa.textContent;
    });
});


