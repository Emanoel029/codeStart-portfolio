//Isso faz com q todo que estiver dentro dessa função deja carregado logo após o script ser lido

document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const mobileMenu = document.querySelector(".menu");

  mobileMenuIcon.addEventListener("click", function() {
    mobileMenu.classList.toggle("mobile-menu-open") //quado clicar no menu vai assumir as propriedade de @media
  });
}); 
