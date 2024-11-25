// Selectie van elementen voor de navigatiebalk
const menuButton = document.querySelector('.menu button');
const closeButton = document.querySelector('nav button');
const navMenu = document.querySelector('nav');
const searchBar = document.querySelector('.search-container');

// Selectie van elementen voor het sorteer-menu
const tweedeButton = document.querySelector('.filter-sorteer button:nth-of-type(2)'); 
const sorteerMenu = document.querySelector('.filter-sorteer-menu');
const sorteerCloseButton = document.querySelector('.filter-sorteer-menu button');

// Eventlisteners voor openen en sluiten van het navigatiemenu
menuButton.addEventListener('click', toonMenu);
closeButton.addEventListener('click', sluitMenu);

// Eventlisteners voor openen en sluiten van het sorteer-menu
tweedeButton.addEventListener('click', toonSorteerMenu);
sorteerCloseButton.addEventListener('click', sluitSorteerMenu);

// Functie om het navigatiemenu te tonen
function toonMenu() {
  navMenu.classList.add('toonMenu');
  searchBar.classList.add('hide');
}

// Functie om het navigatiemenu te sluiten
function sluitMenu() {
  navMenu.classList.remove('toonMenu');
  searchBar.classList.remove('hide');
}

// Functie om het sorteer-menu te tonen
function toonSorteerMenu() {
  sorteerMenu.classList.add('toonSorteerMenu'); // Nieuwe klasse voor sorteer-menu
}

// Functie om het sorteer-menu te sluiten
function sluitSorteerMenu() {
  sorteerMenu.classList.remove('toonSorteerMenu'); // Nieuwe klasse voor sorteer-menu
}
