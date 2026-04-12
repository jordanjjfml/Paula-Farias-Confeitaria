console.log("Paula Farias Confeitaria estou por aqui!");

const elemento = document.querySelectorAll("p");
console.log(elemento);

// Funcionalidade para mostrar/ocultar a seção Sobre
const links = document.querySelectorAll(".Link-header");
const sectionSobre = document.getElementById("sobre");
const sectionProdutos = document.getElementById("produtos");
const botaoVerProdutos = document.querySelector(".button-main");

links.forEach(link => {
    link.addEventListener("click", function() {
        if (this.textContent.trim() === "Sobre") {
            sectionSobre.classList.toggle("mostrar");
            sectionProdutos.classList.remove("mostrar");
        } else if (this.textContent.trim() === "Produtos") {
            sectionProdutos.classList.toggle("mostrar");
            sectionSobre.classList.remove("mostrar");
        } else if (this.textContent.trim() === "Contato") {
            alert("Paula Farias Confeitaria\nDoces e Salgados\n92984635768");
        } else {
            sectionSobre.classList.remove("mostrar");
            sectionProdutos.classList.remove("mostrar");
        }
    });
});

// Adicionar funcionalidade ao botão "Ver Produtos"
botaoVerProdutos.addEventListener("click", function() {
    sectionProdutos.classList.toggle("mostrar");
    sectionSobre.classList.remove("mostrar");
});

// Carrossel de Produtos
let slideIndex = 1;

function mudarSlide(n) {
    mostrarSlides(slideIndex += n);
}

function currentSlide(n) {
    mostrarSlides(slideIndex = n);
}

function mostrarSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("show");
    });
    
    dots.forEach(dot => {
        dot.classList.remove("active");
    });
    
    slides[slideIndex - 1].classList.add("show");
    dots[slideIndex - 1].classList.add("active");
}

// Inicializar carrossel
mostrarSlides(slideIndex);