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

// Hartjes
const allHearts = document.querySelectorAll('.hartje');
// Selectie van elementen
const merkenLink = document.querySelector('.merken-link');
const merkenScherm = document.querySelector('.merken-scherm');
const sluitKnop = document.querySelector('nav button');
const terugKnop = document.querySelector('.terug-knop');

//whishlist
const whishlist = document.querySelector('.whishlist span');

// Video elements
const bgVideo = document.querySelector('.bgVideo');
const startVideo = document.getElementById('startVideo');
const myVideo = document.getElementById('myVideo');
const kerstSlinger = document.querySelector('.kerst-slinger');


// Startvideo appears first, then transitions to bgVideo
document.getElementById('kerst-toggle').addEventListener('change', function () {
  const startVideo = document.getElementById('startVideo');
  const bgVideo = document.getElementById('myVideo');

  // Play the start video
  startVideo.play();
  startVideo.style.zIndex = '100'; // Ensure it's on top
  startVideo.style.display = 'block'; // Ensure it is visible

  // Play the background video, but keep it hidden initially
  bgVideo.style.display = 'none'; // Hide initially

  // After 3 seconds, hide the start video and reveal the background video
  setTimeout(() => {
      startVideo.pause(); // Stop the start video
      startVideo.style.display = 'none'; // Hide the start video
      bgVideo.play(); // Preload the background video
      bgVideo.style.display = 'block'; // Show the background video
      bgVideo.style.zIndex = '-1'; // Ensure it's in the background
  }, 3000); // Wait 3 seconds before switching
});


document.getElementById('kerst-toggle').addEventListener('change', function () {
    const video = document.getElementById('myVideo');
    const audio = new Audio('geluid/geluid-kerst.mp3');

    if (this.checked) {
      console.log('Kerst thema actief');
      document.documentElement.classList.add('kerst');
      bgVideo.classList.remove('hide'); // Laat de video zien
      kerstSlinger.classList.remove('hide');
      video.play();
      audio.play();

      setTimeout(() => {
        video.pause();
        video.currentTime = 0;
        bgVideo.classList.add('hide'); // Verberg de video
        kerstSlinger.classList.ass('hide');

        audio.pause();
        audio.currentTime = 0;
        console.log('Video en geluid zijn gestopt en verborgen na 15 seconden');
      }, 15000); // 15 seconden
    } else {
      console.log('Kerst thema uitgeschakeld');
      document.documentElement.classList.remove('kerst');
      bgVideo.classList.add('hide');
      video.pause();
      video.currentTime = 0;
      audio.pause();
      audio.currentTime = 0;
    }
  });

//let
let whislistNumbers = 0;

// Sluiten van het navigatiemenu
menuButton.addEventListener('click', toonMenu);
closeButton.addEventListener('click', sluitMenu);

// Het sorteer-menu
tweedeButton.addEventListener('click', toonSorteerMenu);

// Openen en sluiten van het filtreer-menu
eertseButton.addEventListener('click', toonFiltreerMenu);

// Eventlisteners voor hartjes (favorieten toggelen)
allHearts.forEach(heart => {
  heart.addEventListener('click', function () {
    if (this.src.includes("hart-rood_1.png")) {
      whislistNumbers -= 1;
      console.log(whislistNumbers);
      whishlist.innerHTML = whislistNumbers;
      this.src = "images/hart.png";
    } else {
      whislistNumbers += 1;
      console.log(whislistNumbers);
      whishlist.innerHTML = whislistNumbers;
      this.src = "images/hart-rood_1.png";
    }
  });
});

// Eventlistener voor het tonen van het merken scherm
merkenLink.addEventListener('click', toonMerkenScherm);

// Eventlistener voor het sluiten van het merken scherm
terugKnop.addEventListener('click', sluitMerkenScherm);

// Eventlistener voor het sluiten van de navigatie
sluitKnop.addEventListener('click', sluitNavigatie);

// Eventlistener voor het btnMerken
if (btnMerken) {
  btnMerken.addEventListener('click', () => {
    sluitMerkenScherm();
    sluitMenu();
  });
}

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
  sorteerMenu.showModal();
}

// Functie om het filtreer-menu te tonen
function toonFiltreerMenu() {
  filtreerMenu.showModal();
}

// Functie om het merken scherm te tonen
function toonMerkenScherm() {
  merkenScherm.classList.add('toon');
  toonMenu.classList.add('hide');
  toonMenu.classList.remove('toon');
}

// Functie om het merken scherm te sluiten
function sluitMerkenScherm() {
  merkenScherm.classList.remove('toon');
  toonMenu.classList.add('hide');
}

// Functie om de navigatie te sluiten
function sluitNavigatie() {
  document.querySelector('nav').classList.remove('toonMenu');
}