

const cadastro = document.getElementById('pet')
const nome = document.getElementById('nome')
const idade= document.getElementById('idade')
const botao = document.getElementById('botao')
const tipo = document.getElementById('tipo')


botao.addEventListener('click', function(){
   
    let valorNome = document.createElement('p')
    let valorIdade = document.createElement('p')
    let valorTipo = document.createElement('p')
    valorNome.innerText = "nome do animal: " + nome.value
    valorIdade.innerText = "idade do animal: " +idade.value
    valorTipo.innerText = "tipo do animal: " + tipo.value
    cadastro.append(valorNome,valorIdade,valorTipo)
    alert("Cadastro Realizado")
    
})


const login = document.getElementById('login')
login.addEventListener('click' ,function(){
alert("Para logar utilize o login e senha enviados para seu email")
})
const clinica = document.getElementById('clinica')
clinica.addEventListener('click' ,function(){
alert("Serviço de clinica, Remedios para seu pet e medicinas")
})
const petShop = document.getElementById('pet-shop'); 

petShop.addEventListener('click', function() {
  alert("Serviço de clínica, Remédios para seu pet e medicinas");
});
const tosa = document.getElementById('tosa');  
tosa.addEventListener('click', function() {
  alert("Serviço de tosa, deixe seu pet com um visual incrível!");
});

const lanches = document.getElementById('lanches');  

lanches.addEventListener('click', function() {
  alert("Serviço de lanches caninos, alimente seu pet com deliciosos petiscos!");
});

const passeio = document.getElementById('passeio'); 

passeio.addEventListener('click', function() {
  alert("Serviço de passeio, oferecemos ótimos passeios para o seu pet!");
});
const banho = document.getElementById('banho')

banho.addEventListener('click', function() {
  alert("Limpeza geral para seu pet!");
});


