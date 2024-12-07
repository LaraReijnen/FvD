
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

// Hartjes
const allHearts = document.querySelectorAll('.hartje');
// Selectie van elementen
const merkenLink = document.querySelector('.merken-link');
const merkenScherm = document.querySelector('.merken-scherm');
const sluitKnop = document.querySelector('nav button');
const terugKnop = document.querySelector('.terug-knop');

//whishlist
const whishlist = document.querySelector('.whishlist span')

//video
const bgVideo = document.querySelector('.bgVideo');



document.getElementById('kerst-toggle').addEventListener('change', function () {
  const video = document.getElementById('myVideo');
  const audio = new Audio('geluid/geluid-kerst.mp3');// Selecteer het audio-element

  if (this.checked) {
      console.log('Kerst thema actief');
      document.documentElement.classList.add('kerst');
      bgVideo.classList.remove('hide'); // Laat de video zien
      video.play();
      audio.play(); // Start het geluid

      // Zet een timeout om de video en audio na 15 seconden te stoppen
      setTimeout(() => {
          video.pause(); // Stop de video
          video.currentTime = 0; // Reset naar het begin
          bgVideo.classList.add('hide'); // Verberg de video

          audio.pause(); // Stop het geluid
          audio.currentTime = 0; // Reset audio naar het begin
          console.log('Video en geluid zijn gestopt en verborgen na 15 seconden');
      }, 15000); // 15 seconden (15000 milliseconden)
  } else {
      console.log('Kerst thema uitgeschakeld');
      document.documentElement.classList.remove('kerst');
      bgVideo.classList.add('hide'); // Verberg de video
      video.pause(); // Stop de video
      video.currentTime = 0; // Reset naar het begin
      audio.pause(); // Stop het geluid
      audio.currentTime = 0; // Reset audio naar het begin
  }
});




//let
let whislistNumbers = 0;

//sluiten van het navigatiemenu
menuButton.addEventListener('click', toonMenu);
closeButton.addEventListener('click', sluitMenu);

//het sorteer-menu
tweedeButton.addEventListener('click', toonSorteerMenu);

//openen en sluiten van het filtreer-menu
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
  sorteerMenu.showModal(); // Nieuwe klasse voor sorteer-menu
}

// Functie om het filtreer-menu te tonen
function toonFiltreerMenu() {
  filtreerMenu.showModal(); // Nieuwe klasse voor sorteer-menu
}

// Functie om het merken scherm te tonen
function toonMerkenScherm() {
  merkenScherm.classList.add('toon');
}

// Functie om het merken scherm te sluiten
function sluitMerkenScherm() {
  merkenScherm.classList.remove('toon');
}

// Functie om de navigatie te sluiten
function sluitNavigatie() {
  document.querySelector('nav').classList.remove('toonMenu');
}
