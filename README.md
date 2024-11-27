# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Lara Reijnen

  #### Je startniveau:
  hier je startniveau (rood)


  #### Je focus:
  surface plane
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
  https://www.etos.nl/
  
  #### Screenshot(s) van de eerste pagina (small screen): 
   https://www.etos.nl/trending/
   Trending
  <img src="readme-images/trending.png" width="375px" alt="Treding pagina van de etos">
  
  #### Screenshot(s) van de tweede pagina (small screen):
  https://www.etos.nl/klantenservice/
   service 
  <img src="readme-images/service.png" width="375px" alt="Klantenservice pagina van de etos">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>
  Ik vond het lastig om de screen reader te gebruiken, want ik begreep niet precies hoe je het meost gebruiken.

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  De etos heeft niet te beste screen reader (of het ligt aan mijzelf die niet snapt hoe je een screan reader gebruikt.) 
  Toen ik het gebruikte bleef hij de slogan van de etos zeggen en vertelde hij niet de tekst op de pagina, dat gebeurde 
  bij mij tenminsten, misschien dat hij het normaal wel doet.
  voor de rest is de site wel mooi opgebauwt met code. ze gebruiken heel veel divs.

  - een paar opmerkingen met de screanreader bij de etos site:
  Navigatie: Controleer of de website eenvoudig te navigeren is met een toetsenbord en of alle interactieve elementen, zoals knoppen en links, correct worden aangekondigd door de screenreader.

  Afbeeldingen: Zorg ervoor dat alle afbeeldingen voorzien zijn van alternatieve tekstbeschrijvingen (alt-teksten) die door de screenreader worden voorgelezen.
  
  Kopstructuur: Verifieer of de pagina een logische hiërarchie van koppen (H1, H2, H3, etc.) heeft, zodat de screenreader de structuur van de inhoud correct kan overbrengen.
  
  Formulieren: Controleer of alle formulieren correct zijn gelabeld en of de screenreader de gebruiker adequaat door het formulier leidt.
  
  Dynamische Inhoud: Zorg ervoor dat dynamische inhoud, zoals pop-ups of modale vensters, correct wordt aangekondigd en toegankelijk is voor screenreader-gebruikers.

  Toetsenbordgebruik: Screenreader-gebruikers navigeren vaak met het toetsenbord. Probeer de website te bedienen zonder muis en controleer of je bij alle interactieve elementen kunt komen (zoals knoppen, links en formulieren).

  Tab-volgorde: Controleer of de focuslogica logisch is, bijvoorbeeld of de tab-volgorde overeenkomt met de visuele presentatie

  Controleer of afbeeldingen op de website een beschrijvende alt-tekst hebben. Dit kan worden gedaan door een screenreader zoals NVDA, VoiceOver (voor Mac) of JAWS te gebruiken. Je kunt bijvoorbeeld langs een afbeelding navigeren en luisteren wat de screenreader zegt.

  Als de website modale vensters, pop-ups of sliders heeft, test dan of deze toegankelijk zijn. Bij een pop-up moet de screenreader bijvoorbeeld automatisch de focus verplaatsen naar de pop-up.

  Zorg ervoor dat knoppen zoals "Sluiten" duidelijk zijn en goed werken.

  Pas ARIA correct toe: Gebruik ARIA-labels en -rollen (zoals aria-label en role) om de toegankelijkheid van interactieve elementen te verbeteren.

  Onderhoud regelmatig: Toegankelijkheid is geen eenmalige taak. Controleer bij elke update van de website of de toegankelijkheid behouden blijft.

  ### bevindingen met coderen
  - navigatie
  ik ben begonnen met de navigatie en na een werkgroep toen we de hamburger menu oefening moesten doen kwam ik er achter dat ik de navigatie helemaal anders moest opstellen.

  - slideshow
  door de oefeing in de werkgroep wat de slide show maken niet al te moeilijk.

  - hamburger menu
  mijn hamburger menu is werkend door javascrip alleen vind ik het vormgeven lastig met css.

  ### wat ik deze week heb geleerd
  ik heb deze week geleerd over de flexbox, grid en javasript. door de oefeingen te doen in de werkgroep ben ik er wel een stuk beter in geworden en vind ik het ook makkelijker om toe te passen in mijn site.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown.schets.trending.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdownschets.klantenservice.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 


</details>



## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>
  
  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
    Deze week heb ik gewerkt aan de navigatie, slideshow en het hamburger menu. Door de werkgroep ontdekte ik dat ik mijn navigatie opnieuw moest opstellen. Het maken van de slideshow ging soepel dankzij de oefeningen, maar het vormgeven van het hamburger menu met CSS vond ik uitdagend, hoewel het met JavaScript werkt. Daarnaast heb ik veel geleerd over flexbox, grid en JavaScript, en dankzij de oefeningen voel ik me zekerder in het toepassen hiervan op mijn website.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen
  Feedbac:
  - punt 1
  Meer iformatie typen in de read me over de screan reader van de etos: wat doen ze wel en niet bij de toegankelijkheid van de site.

  - punt 2 breakdown schets
  filteren is een button.
  input type select: maakt een dropdown aan.
  hele pagina een section. opdelen in ul met li'tjes.
  mag div gebruiken.
  producten is een section met verschillende producten als ul en li.

  in de footer zijn de H3'tjes openklapjes. en als het open klapt is de tekst linkjes
  details en summery(html) zorgt ervoor dat details open klappen.

  - punt 3 code
  Hoofd titel aanpassen en en naar nl

  navigatie: geen list bij de plaatjes
  Nav: h1(X) in de nav met Li
  
  zoekbar: alleen een section.

  sorteren alt tekst: drop down menu: sorteer drop down menu.

  ### Wat neem ik mee
  Na afloop van het feedback gesprek neem ik de volgende verbeterpunten en inzichten mee om de toegankelijkheid en structuur van de website te optimaliseren:

  - Toegankelijkheid:
    Meer informatie toevoegen aan de README over de screenreader-functionaliteiten van Etos. Wat doen ze wel en niet op het gebied van toegankelijkheid? Dit biedt inzicht in waar verbeteringen mogelijk zijn.
    
  - Structuur en opbouw:
    Filterfunctie: Implementeren als een button met een input van het type select voor een dropdown.
    Secties en lijsten:
        De hele pagina opdelen in een sectie. Gebruik een ul met li-elementen om inhoud te structureren.
        De productsectie wordt een section waarin producten worden gepresenteerd als een lijst (ul) met individuele items (li).
    Footer: H3-titels in de footer maken als openklapbare elementen. Bij het openen worden linkjes zichtbaar, gerealiseerd met HTML-elementen details en summary.
    
  - Code verbeteringen:
      Hoofdtitel: Aanpassen naar Nederlands.
      Navigatie:
          Vermijd lijst-elementen bij de plaatjes.
          Gebruik een nav-structuur met li-elementen, maar zonder een H1 erin.
      Zoekbalk: Alleen als een section implementeren.
      Alt-tekst: Zorg ervoor dat de alt-tekst voor de dropdown-menu's duidelijk aangeeft wat het is, bijvoorbeeld: "Sorteer dropdown menu."
Deze punten zullen bijdragen aan een gebruiksvriendelijke en toegankelijke website met een logische structuur en duidelijke navigatie.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Wat ik heb gedaan met mijn code deze week
  - Productweergave: Ik ben begonnen met het plaatsen van mijn producten. In het begin had ik moeite omdat de layout niet meebewoog wanneer ik de schermbreedte aanpaste. Later ontdekte ik dat dit kwam door de vaste width. Na het aanpassen werkte het goed.
  - Sorteerknop: Vervolgens heb ik gewerkt aan een sorteerknop. In eerste instantie gebruikte ik dezelfde aanpak als bij mijn navigatieknop (met een ul en li's), maar tijdens de les leerde ik dat dit beter kon met een dialog en een form, omdat het de hele pagina overneemt. Dit vond ik in het begin lastig, maar na de uitleg begreep ik het. Toen het functioneerde, heb ik de styling met CSS afgerond en passende kleuren toegevoegd.
  - Algemene layout: Ik heb de elementen op de juiste breedte gezet. Voorheen stonden delen niet goed uitgelijnd, omdat ze op verschillende lijnen begonnen. Door een padding van 1em te gebruiken, is dit nu gecorrigeerd.


  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  - Wat ging goed
  Productweergave: Het plaatsen van mijn producten ging uiteindelijk goed nadat ik ontdekte dat de vaste width het responsive gedrag blokkeerde. Door dit aan te passen, beweegt de layout nu mee met de schermbreedte.

  Sorteerknop: Na de uitleg in de les begreep ik hoe ik een dialog en form moest gebruiken in plaats van een ul met li's. Dit werkte goed en ik kon de styling afronden met passende kleuren, wat het geheel er strak laat uitzien.

  Layout aanpassingen: Door padding van 1em toe te voegen, staan alle delen nu netjes uitgelijnd, wat een meer consistente uitstraling geeft aan de pagina.

  - wat ging minder goed
  Responsive gedrag van de producten: In het begin begreep ik niet waarom mijn layout niet meebewoog met de schermbreedte. Het vinden van de oorzaak (de vaste width) kostte me wat tijd.

  Dialog implementatie: De overstap van een ul naar een dialog met een form was een uitdaging, vooral omdat ik dit concept nog niet eerder had toegepast. Pas na uitleg begreep ik hoe dit moest werken.

  Styling van de sorteerknop: Het stylen van de sorteerknop en het dialog-element vereiste wat experimenteren voordat ik tevreden was met het resultaat.

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | moet je het menu verder werkend maken? en zo ja hoe zet je dat in de code?        | ---                | ---          | ---              |
  |onderin de pagina, wat is het? een ul met li ( bij de plaatjes)  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>