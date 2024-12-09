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

  ### een paar opmerkingen met de screanreader bij de etos site:
- Navigatie: Controleer of de website eenvoudig te navigeren is met een toetsenbord en of alle interactieve elementen, zoals knoppen en links, correct worden aangekondigd door de screenreader.

- Afbeeldingen: Zorg ervoor dat alle afbeeldingen voorzien zijn van alternatieve tekstbeschrijvingen (alt-teksten) die door de screenreader worden voorgelezen.
  
- Kopstructuur: Verifieer of de pagina een logische hiërarchie van koppen (H1, H2, H3, etc.) heeft, zodat de screenreader de structuur van de inhoud correct kan overbrengen.
  
- Formulieren: Controleer of alle formulieren correct zijn gelabeld en of de screenreader de gebruiker adequaat door het formulier leidt.
  
- Dynamische Inhoud: Zorg ervoor dat dynamische inhoud, zoals pop-ups of modale vensters, correct wordt aangekondigd en toegankelijk is voor screenreader-gebruikers.

- Toetsenbordgebruik: Screenreader-gebruikers navigeren vaak met het toetsenbord. Probeer de website te bedienen zonder muis en controleer of je bij alle interactieve elementen kunt komen (zoals knoppen, links en formulieren).

- Tab-volgorde: Controleer of de focuslogica logisch is, bijvoorbeeld of de tab-volgorde overeenkomt met de visuele presentatie

- Controleer of afbeeldingen op de website een beschrijvende alt-tekst hebben. Dit kan worden gedaan door een screenreader zoals NVDA, VoiceOver (voor Mac) of JAWS te gebruiken. Je kunt bijvoorbeeld langs een afbeelding navigeren en luisteren wat de screenreader zegt.

- Als de website modale vensters, pop-ups of sliders heeft, test dan of deze toegankelijk zijn. Bij een pop-up moet de screenreader bijvoorbeeld automatisch de focus verplaatsen naar de pop-up.

- Zorg ervoor dat knoppen zoals "Sluiten" duidelijk zijn en goed werken.

- Pas ARIA correct toe: Gebruik ARIA-labels en -rollen (zoals aria-label en role) om de toegankelijkheid van interactieve elementen te verbeteren.

- Onderhoud regelmatig: Toegankelijkheid is geen eenmalige taak. Controleer bij elke update van de website of de toegankelijkheid behouden blijft.
Observatie: Niet elk losstaand kopje wordt voorgelezen (Vergelijking met Etos-site)

 ### Bevinding: Tijdens het testen van de toegankelijkheid viel op dat de screenreader op de Etos-website niet elk losstaand kopje voorleest. Dit gedrag komt overeen met wat ook op jouw website gebeurt. Je vraagt je af of dit correct is of dat er sprake is van een toegankelijkheidsprobleem.
Wat betekent "losstaand kopje" in dit geval?

Een losstaand kopje verwijst waarschijnlijk naar een koptekst (bijvoorbeeld een H1, H2, H3, etc.) die zelfstandig in de structuur staat zonder directe, visueel gekoppelde inhoud zoals tekst, beschrijvingen of andere elementen. Dit kan bijvoorbeeld gebeuren in een sectie waar een kopje wordt gebruikt als sectie-indicator, maar waar de daadwerkelijke inhoud elders staat of niet gekoppeld is aan dat specifieke kopje.
Waarom wordt niet elk kopje voorgelezen door een screenreader?

    Technische oorzaken:
  - Gebruik van aria-hidden="true": Als een kopje expliciet verborgen is voor assistieve technologie via aria-hidden="true", wordt het niet voorgelezen door screenreaders.
  - Onjuiste structuur: Kopjes zonder duidelijke hiërarchie (bijvoorbeeld een H3 zonder voorafgaande H1 of H2) kunnen soms door screenreaders worden genegeerd omdat ze de semantische volgorde niet begrijpen.
  - Tabindex-issues: Als een kopje niet in de natuurlijke volgorde van de DOM zit of is verborgen met negatieve tabindex (bijv. tabindex="-1"), kan het worden overgeslagen.
  - CSS-styling: In sommige gevallen kan inhoud die visueel wordt verborgen via CSS (zoals display: none of visibility: hidden) onzichtbaar blijven voor screenreaders.

    Intentie van de ontwikkelaars:
    - Soms kiezen ontwikkelaars ervoor om bepaalde elementen niet voor te laten lezen als ze als overbodig of niet-informatief worden beschouwd. Dit kan bijvoorbeeld het geval zijn bij decoratieve koppen of visuele opsmuk zonder inhoudelijke waarde.

    Screenreader-specifieke interpretaties:
    - Screenreaders hebben verschillende manieren om inhoud te interpreteren. Sommige screenreaders filteren elementen die als minder relevant worden beschouwd, zoals een kopje zonder directe inhoud, afhankelijk van de gebruikersinstellingen.

    Vergelijking met de Etos-site:
    - Het gedrag dat je beschrijft op de Etos-site wijst erop dat dit mogelijk een bewuste keuze is geweest van de ontwikkelaars. Ze hebben wellicht besloten om bepaalde kopjes niet toegankelijk te maken voor screenreaders, bijvoorbeeld omdat ze puur visueel bedoeld zijn.
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
  een navigatie knop uitwerken.

  - punt 2
  surfplane, bekijken. filteren soorteren is al iets.
  hartje laten kloppen. javascript week. 

  - punt 3
  het kan om de roze header anders te maken. als ik uitleg waarom iets iets anders kan, dan mag het.

  - punt 4
  sterretjes; width:1.5 em moet weg: .product-soort img:nth(1)


</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### veranderingen
  voor de toegankelijkheid van mijn site heb ik een paar dingen evrander waaronder, odnerin de pagina heb je linkjes met daarvoor een vinkje. het is logiscch als hij onderstreeo word als je erover hoverd aangezien je dan makkelijker ziet dat je muis erop zit en dat het een link is een niet zomaar een blok met tekst.

  ### Bevindingen
 - Dubbele voorlezing van namen bij links met afbeeldingen

   Bevinding: Wanneer een link is gekoppeld aan een 
   afbeelding, leest de screenreader de naam van de link en de alternatieve tekst (alt-tekst) van de afbeelding afzonderlijk voor. Dit resulteert in een dubbele voorlezing van dezelfde naam.
   
   Toelichting: Dit kan verwarrend en inefficiënt zijn voor gebruikers van screenreaders, omdat dezelfde informatie onnodig wordt herhaald.
   
   Verbetering:
      - Controleer de HTML-structuur van de links met afbeeldingen. Zorg ervoor dat de alt-tekst van het plaatje alleen aanvullende informatie bevat of geheel weggelaten wordt als de naam van de link al voldoende beschrijvend is.
       - Gebruik aria-hidden="true" op de afbeelding als deze geen unieke informatie toevoegt aan de link.
   
2. Onvolledige voorlezing bij productoverzichten

- Bevinding: Bij het navigeren door productoverzichten leest de screenreader alleen de H2-titels van de producten en de "Voeg toe"-knop voor. Andere elementen, zoals de beschrijvende paragrafen (P) en de knop "Toevoegen aan favorieten", worden niet voorgelezen.

Toelichting: Gebruikers ontvangen daardoor onvoldoende context over de producten en missen essentiële functies zoals het toevoegen aan favorieten.

Verbetering:

    - Controleer de semantische structuur van de productoverzichten. Zorg ervoor dat alle relevante tekst, inclusief beschrijvingen en knoppen, correct is geannoteerd met ARIA-attributen (zoals aria-label of aria-describedby).
    - Voeg tabindex toe aan interactieve elementen om ze toegankelijk te maken voor screenreaders.

3. Niet voorgelezen kop "Veelgestelde vragen" (H2)

- Bevinding: De kop "Veelgestelde vragen" wordt door de screenreader niet voorgelezen, ondanks dat het een H2 is.

Toelichting: Dit wijst mogelijk op een probleem met de HTML-structuur, zoals verkeerd gesloten tags, een conflict met ARIA-attributen, of een script dat de kop onzichtbaar maakt voor assistieve technologie.

Verbetering:

  - Controleer of de H2 correct is geïmplementeerd in de DOM-structuur.
    - Zorg dat de H2 geen onbedoelde attributen heeft, zoals aria-hidden="true".
    - Test met verschillende screenreaders om te achterhalen of dit een browser- of screenreader-specifiek probleem is.

4. Niet voorgelezen losse paragrafen (P) en koppen

- Bevinding: De screenreader slaat regelmatig losse tekst in paragrafen (P) en koppen (H) over.

Toelichting: Dit kan veroorzaakt worden door incorrecte implementatie, zoals:

  - Inhoud die wordt weergegeven met CSS en niet in de DOM-structuur staat.
  - Inhoud met aria-hidden="true" of een verkeerde tabindex-waarde.
  - Een gebrek aan duidelijke navigatie of hiërarchie in de semantische opmaak.

Verbetering:

  - Controleer of alle inhoud in de DOM aanwezig is en zichtbaar is voor screenreaders.
  - Gebruik een logische hiërarchie van koppen (H1, H2, H3, etc.) en zorg ervoor dat paragrafen correct als P zijn gemarkeerd.
  - Voeg waar nodig ARIA-attributen toe om de hiërarchie en context te verduidelijken.

5. Vergelijking met de Etos-site: inconsistent voorlezen van koppen

Bevinding: Een soortgelijk probleem doet zich voor op de Etos-website, waar bepaalde koppen niet worden voorgelezen. Het is onduidelijk of dit een goed praktijkvoorbeeld is of dat er sprake is van een probleem.

Toelichting: De inconsistentie kan een teken zijn van een gemeenschappelijk probleem in de implementatie van beide sites of van specifieke beperkingen in de gebruikte screenreader.

Verbetering:

  - Analyseer de broncode van beide sites om te bepalen welke technische aanpak is gebruikt voor de koppen.
  - Vergelijk de gebruikte ARIA- en HTML5-elementen.
  - Test met verschillende screenreaders en browsers om te achterhalen of het probleem consistent is.

Algemene aanbevelingen voor verbeteringen:

  - Regelmatige toegankelijkheidstests: Test de site met verschillende screenreaders (bijv. NVDA, JAWS, VoiceOver) en browsers om problemen vroegtijdig te detecteren.
  - Gebruik van ARIA-attributen: Voeg indien nodig ARIA-labels, aria-hidden of aria-describedby toe om duidelijkere navigatie en voorleesstructuren te bieden.
  - Semantische HTML: Zorg ervoor dat alle inhoud correct is gestructureerd met semantische HTML-tags.
  - Gebruikerstests: Betrek gebruikers met een visuele beperking bij het testen om realistische feedback te ontvangen.

Met deze aanpassingen kan de toegankelijkheid aanzienlijk worden verbeterd, wat leidt tot een betere gebruikservaring voor alle bezoekers, inclusief degenen die afhankelijk zijn van screenreaders.
  
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  
  vragen over:
  - waarom op de trending pagina de producten niet ze automatisch naast elkaar komen.
  antwoord: het moest in een grid collum van de vijver 

  - ipv zwart wit modes, of ik een andere modus ervan kan amken zonder de plaatjes aan te hoeven passen. 
  antwoord: ja dat mag, je hoeft niet je plaatjes aan te passen maar wel laten zien dat je het kan met bijvoorbeeld bij 1 doen.

  antwoord: ja maar ht moet wel in de richting maar je hoeft geen plaatjes aan te passen als het te veel moeite is.
  - vragen over de screan reader, hoe je de dubbelen namen weghaald.

  - vragen over wat ik heb gemist in de vorige les over animeren. 
  antwoord: je kan het zien op de pwp van de les.

  - is de list en grid goed of meoten het plaatjes woorden: ik vind dit voor de screan reader meer overzichtelijk.
  antwoord: onderbouw gewoon waarom je bepaalde keuzes maakt.

  - waar kan je de font vinden van de website?
  antwoord: NETWORK > alle files die die ophaalt > je ziet ook alle fonts. copy paste in browser.

  - hoeveel microinteracties heb ik,
  antwoord: met kerst thema, wel een beetje leuk maken > video. of muziekje. heb je echt iets toegevoegd aan de basis.

  - bij de service pagian bewegen de plaatjes niet mee, hoezo doen ze dat niet, want als je het op px zet dan wel alleen worden de plaatjes allemaal een andere groote en het groene blokje daaromheen ook?
  antwoord: 



  ### To Do
  - #### animatie maken.
  - navigatie fixen.
  - header laten plakken en terug komen als ej scrolt.
  - geluid toevoegen, rekening met toegankelijkheid.
  - spans weghalen en anders stylen in navigatie.
  
  - kerst thema toevoegen met geluid en kleur en gifs of video's.

  ### vragen
  - heb ik nu al 5 interacties voor mijn keuze? ik weet het namelijks niet zeker.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  trending: lijst van een ding is niet nodig. > het is een p.

  spans weghalen in de nav.

  class = menu de p tag hoort een link te zijn.

  - punt 2
  plaatje vervangen.
  ligth dark mode 
  media querie dark mode
  img{
    content: url(imgjsjidisdi)
  } 

  - punt 3
  plaatjes aanpassen in photoshop, zodat ze evengroot worden.(service pagina groene blokjes)
  of aspect ratio.

  - punt 4
  week 2 toegankelijkheid. screanreader website.


</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  - Verbetering van navigatie en interacties:
Ik heb geleerd hoe ik een duidelijke en toegankelijke navigatie kan maken met behulp van HTML5-elementen zoals `<nav>` en `<ul>`. Ook heb ik door de werkgroepen goed kunnen begrijpen hoe ik mijn hamburger-menu werkend kon maken met JavaScript.

  - Gebruik van nieuwe technieken:
Ik heb flink geoefend met Flexbox, Grid en JavaScript. Dit heeft geholpen bij het maken van onderdelen zoals de slideshow en het sorteerknopje. Door de oefeningen ging het steeds beter, en nu begrijp ik hoe ik deze technieken kan toepassen.

  - Toegankelijkheidstests: 
Het testen van mijn website met screenreaders gaf me veel inzicht. Ik kwam er bijvoorbeeld achter dat dubbele voorlezingen van alt-teksten kunnen voorkomen als ik beter op de structuur en ARIA-attributen let. Het was interessant om te zien hoe een screenreader mijn site gebruikt.

  - Layout en responsiviteit:
Ik heb geleerd hoe ik problemen met vaste widths kan oplossen, zodat mijn website goed meebeweegt op verschillende schermgroottes. Door Grid te gebruiken, heb ik de layout flexibel kunnen maken. bijvoorbeeld bij de layout van de producten op mijn pagina, door middel van grid en has:.

  - Interactieve kerstknop:
Het maken van een interactieve kerstknop was een leuk. Als je erop klikt, speelt twee soorten video's en geluiden af en komt de hele pagina in kerstsfeer. Dit gaf me de kans om meer te leren over het gebruik van JavaScript en hoe je een website echt interactief en leuk kunt maken.

  - Feedback verwerken: 
Tijdens meetings en werkgroepen kreeg ik goede feedback die ik direct kon toepassen. Bijvoorbeeld het toevoegen van hover-effecten op links of het verbeteren van de structuur van mijn productpagina’s. Dit hielp om mijn website beter en netter te maken.


  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes
  ### Dit was lastig/Is niet gelukt:

  - Screenreader gebruiken:  
Het werken met een screenreader vond ik moeilijk in het begin. Ik wist niet goed hoe ik deze moest bedienen en hoe ik de resultaten moest interpreteren. Hierdoor was het lastig om te bepalen of problemen bij mijn code lagen of aan hoe ik de tool gebruikte.

  - Responsive gedrag van de website:
Het aanpassen van de productweergave zodat deze goed meebeweegt met verschillende schermgroottes was een uitdaging. Ik ontdekte dat een vaste width de layout blokkeerde, maar het duurde even voordat ik doorhad hoe ik dit kon oplossen met Grid.

  - Dialog en sorteerknop:  
Het omzetten van een sorteerknop van een simpele lijst naar een dialog met een form was lastig. Dit concept was nieuw voor mij, en het kostte wat tijd voordat ik het doorhad. Uiteindelijk werkte het.

  - Kerstknop ontwikkelen:
Het toevoegen van geluiden, video's en sfeerelementen voor de kerstknop was technisch gezien uitdagend. Vooral het goed synchroniseren van alle onderdelen, zoals video's en geluid, en zorgen dat het niet te overweldigend werd, kostte wat moeite want de filmpjes moesten elkaar niet overlappen.

  - Styling consistent krijgen: 
Ik had moeite met het consistent stylen van bepaalde onderdelen, zoals de sorteerknop en het hamburger-menu. Het kostte veel tijd om de vormgeving zo te krijgen dat het goed past bij de rest van de website.

  - Beelden en groottes aanpassen:
De plaatjes op de servicepagina bewogen niet goed mee met de rest van de layout. Als ik ze responsive maakte, werden de groene blokjes eromheen ongelijk. Dit is iets waar ik nog aan meost werken, bijvoorbeeld door gebruik te maken van aspect ratio's, maar uitiendelijk vond ik het makkelijker om de plaatjes groote aantepassen, dat de witruimte even groot is.

  - Kleine technische details:
Sommige kleine details, zoals dubbele voorlezingen in de screenreader of elementen die niet netjes werden voorgelezen, bleven lastig op te lossen. Het begrijpen van ARIA-attributen en hoe screenreaders hierop reageren, vraagt nog om meer oefening, maar ik heb geprobeerd om alles zo goed werkend te maken.


  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  <img src="readme-images/screanshot-chatgpt.png" width="375px" alt="error">
  zoals je op het plaatje ziet kon ik niet de link delen omdat er een screanshot in de chat stond, dus hier een screanshot van wat ik kreeg van chatGPT en mijn 
  mijn prompt: ""het gaat om de video, ik wil hem alten afspelen als er op het kerstthema word geklikt, net zoals de kleur van de root verander. maar dan wil ik ook erbij dat dat filmpje afspeeld en dat ej he ook uit kan zetten als je op de knop drukt dat het uit gaat. waarom werkt mijn code nu niet?'"
  de screanshot van de code die ik van chat gpt kreeg:
  <img src="readme-images/screanshot-chatgpt2.png" width="375px" alt="chatGPT code">
  2. bron 2
  https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
  zorgt ervoor dat de scrolbar verdwijnt
  3. bron 3
  .visually_hidden {   
    clip: rect(0 0 0 0);   
    clip-path: inset(50%);   
    height: 1px;   overflow: hidden;   
    position: absolute;   
    white-space: nowrap;   
    width: 1px;
}/*bron Thomas Norden teams bericht*/

</details>