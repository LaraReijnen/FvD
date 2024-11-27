// Selectie van elementen voor de navigatiebalk
const menuButton = document.querySelector('.menu button');
const closeButton = document.querySelector('nav button');
const navMenu = document.querySelector('nav');
const searchBar = document.querySelector('.search-container');

// Selectie van elementen voor het filtreer en sorteer-menu
const tweedeButton = document.querySelector('.filter-sorteer button:nth-of-type(2)'); 
const eertseButton = document.querySelector('.filter-sorteer button:nth-of-type(1)'); 
const sorteerMenu = document.querySelector('.filter-sorteer-menu');
const filtreerMenu = document.querySelector('.sorteer-menu');
const sorteerCloseButton = document.querySelector('.filter-sorteer-menu button');

// Eventlisteners voor openen en sluiten van het navigatiemenu
menuButton.addEventListener('click', toonMenu);
closeButton.addEventListener('click', sluitMenu);


// Eventlisteners voor openen en sluiten van het sorteer-menu
tweedeButton.addEventListener('click', toonSorteerMenu);

// Eventlisteners voor openen en sluiten van het filtreer-menu
eertseButton.addEventListener('click', toonFiltreerMenu);

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
  sorteerMenu.showModal();// Nieuwe klasse voor sorteer-menu
}

// Functie om het filtreer-menu te tonen
function toonFiltreerMenu() {
  filtreerMenu.showModal();// Nieuwe klasse voor sorteer-menu
}
