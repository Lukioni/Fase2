



const botaoForms = document.getElementById('botao-forms');
const texto = document.getElementById('texto1');
botaoForms.addEventListener('click', function () {
    texto.value = "Informe detalhes aqui";
    alert("enviado!")

});
