const menuButton = document.querySelector('.menu button');
const closeButton = document.querySelector('nav button');
const navMenu = document.querySelector('nav');
const searchBar = document.querySelector('.search-container');

// Eventlisteners voor openen en sluiten van het menu
menuButton.addEventListener('click', toonMenu);
closeButton.addEventListener('click', sluitMenu);

function toonMenu() {
  navMenu.classList.add("toonMenu");
  searchBar.classList.add("hide");
}

function sluitMenu() {
  navMenu.classList.remove("toonMenu");
  searchBar.classList.remove("hide");
}
