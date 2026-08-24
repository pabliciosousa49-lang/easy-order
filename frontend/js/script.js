const mesa1 = document.querySelector("#mesa1");
const mesaSelecionada = document.querySelector("#mesa-selecionada");

mesa1.addEventListener("click", function () {
    
    console.log("Mesa 1 foi clicada");
    mesaSelecionada.textContent = "MESA 1";
});


