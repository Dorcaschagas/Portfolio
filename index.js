//animando itens na tela com scroll
AOS.init({
    duration: 1000,
});

//animando botao hamburguer
const nav = document.querySelector('.nav')
const hamburguer = document.querySelector('.hamburguer').addEventListener('click', () =>{
    nav.classList.toggle('active')
})