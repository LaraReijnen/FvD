// Selectie van elementen voor de navigatiebalk
const menuButton = document.querySelector('.menu button');
const closeButton = document.querySelector('nav button');
const btnMerken = document.querySelector('.btnMerken');
const navMenu = document.querySelector('nav');
const searchBar = document.querySelector('.search-container');

// Selectie van elementen voor het filtreer en sorteer-menu
const tweedeButton = document.querySelector('.filter-sorteer button:nth-of-type(2)');
const eertseButton = document.querySelector('.filter-sorteer button:nth-of-type(1)');
const sorteerMenu = document.querySelector('.filter-sorteer-menu');
const filtreerMenu = document.querySelector('.sorteer-menu');
const sorteerCloseButton = document.querySelector('.filter-sorteer-menu button');

// Hartjes (Favorites)
const allHearts = document.querySelectorAll('.hartje');
let wishlistCount = 0;
const wishlist = document.querySelector('.wishlist span');

// Video Elements
const bgVideo = document.querySelector('.bgVideo');
const startVideo = document.getElementById('startVideo');
const myVideo = document.getElementById('myVideo');
const kerstSlinger = document.querySelector('.kerst-slinger');

// Christmas Toggle
document.getElementById('kerst-toggle').addEventListener('change', function () {
  const audio = new Audio('geluid/geluid-kerst.mp3');

  if (this.checked) {
    console.log('Kerst thema actief');
    document.documentElement.classList.add('kerst');
    bgVideo.classList.remove('hide');
    kerstSlinger.classList.remove('hide');

    myVideo.pause();
    myVideo.currentTime = 0;
    myVideo.play();
    audio.play();

    setTimeout(() => {
      myVideo.pause();
      myVideo.currentTime = 0;
      bgVideo.classList.add('hide');
      audio.pause();
      audio.currentTime = 0;
      console.log('Video en geluid zijn gestopt en verborgen na 5 seconden.');
    }, 5000);
  } else {
    console.log('Kerst thema uitgeschakeld');
    document.documentElement.classList.remove('kerst');
    bgVideo.classList.add('hide');
    kerstSlinger.classList.add('hide');

    myVideo.pause();
    myVideo.currentTime = 0;
    audio.pause();
    audio.currentTime = 0;
  }
});

// Navigation Menu
menuButton.addEventListener('click', () => {
  navMenu.classList.add('toonMenu');
  searchBar.classList.add('hide');
});

closeButton.addEventListener('click', () => {
  navMenu.classList.remove('toonMenu');
  searchBar.classList.remove('hide');
});

// Wishlist (Heart Toggle)
allHearts.forEach(heart => {
  heart.addEventListener('click', function () {
    if (this.src.includes("hart-rood_1.png")) {
      this.src = "images/hart.png";
      wishlistCount--;
    } else {
      this.src = "images/hart-rood_1.png";
      wishlistCount++;
    }
    wishlist.textContent = wishlistCount;
  });
});

// Open "Merken" Screen
const merkenLink = document.querySelector('.merken-link');
const merkenScherm = document.querySelector('.merken-scherm');
merkenLink.addEventListener('click', () => {
  merkenScherm.classList.add('toon');
  navMenu.classList.remove('toonMenu');
  searchBar.classList.add('hide');
});

// Close "Merken" Screen
const terugKnop = document.querySelector('.terug-knop');
terugKnop.addEventListener('click', () => {
  merkenScherm.classList.remove('toon');
  navMenu.classList.add('toonMenu');
  searchBar.classList.remove('hide');
});

// Filter and Sort Menu
eertseButton.addEventListener('click', () => {
  filtreerMenu.showModal();
});

tweedeButton.addEventListener('click', () => {
  sorteerMenu.showModal();
});

sorteerCloseButton.addEventListener('click', () => {
  sorteerMenu.close();
});

// Dropdowns (Filter/Sort Details)
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', function () {
    if (this.open) {
      // Close all other dropdowns when one is opened
      document.querySelectorAll('details').forEach(otherDetail => {
        if (otherDetail !== this && otherDetail.open) {
          otherDetail.open = false;
        }
      });
    }
  });
});

// Handle Filter Modal Closing
document.querySelector('.filter-sorteer-menu button').addEventListener('click', () => {
  sorteerMenu.close();
});

// Handle "btnMerken" Click
if (btnMerken) {
  btnMerken.addEventListener('click', () => {
    merkenScherm.classList.remove('toon');
    navMenu.classList.remove('toonMenu');
    searchBar.classList.remove('hide');
  });
};
