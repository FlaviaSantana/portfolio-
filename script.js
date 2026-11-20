// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Destaca no menu a seção que está na tela
const links = document.querySelectorAll("nav ul a");
const secoes = [...links].map(a => document.querySelector(a.getAttribute("href")));

const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });

secoes.forEach(s => s && observador.observe(s));
