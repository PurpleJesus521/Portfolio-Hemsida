# Portfolio-Hemsida
Min egna portfoliohemsida gjord i HTML, CSS och JavaScript

Hemsidan har 5 olika undersidor, som navigeras genom en vertikal navbar och styrs av en Javascript kod som byter ut hemsidans innehåll följaktligen.
Detta stöds av en header med sidtiteln och en footer med min kontaktinformation. Alla undersidor har en bild som ligger högst upp efter headern.

Undersidor:
Hem, med en heroimage och kontaktinformation på botten av sidan.
Projekt, där jag presenterar och kort beskriver projekt eller arbeten jag skapat. Den använder sig även av en lite
kortstruktur som jag skapat, som gör projekten presenterbara och förvarad i en liten dynamisk låda med bakgrund.
Kontakt, där jag har ett litet kontaktformulär utan backend.
Kaniner, där jag har samlat ett antal bilder på mina 2 kaniner som går att skrolla igenom.

Designbeslut:
Jag började tidigt med visionen av att ha en stilig nav-bar som ligger kvar på sidkanten, för att göra det hela lättnavigerat. I början var jag osäker på om nav-baren skulle vara på toppen eller sidan av skärmen, men beslutade senare för kanten då det skulle göra sidinnehållet enkelt att presentera på höger sida. Efter en del strul så introducerades jag till Flexbox av Samuel, vilket jag sedan använde som en basal del av min design. Tex så används det för tidigare nämna navbar, så att dess alternativ ligger fint efter varandra. Även sidinnehållet styrs av en flexbox, så att innehållet alltid ligger till höger och nav-baren till vänster.
När jag sökte efter inspiration så hittade jag en liknande sida med ett mörkare tema, vilket jag använder som inspiration. 

Både headern och footern lade jag till senare i projektet, då jag först bråkade med all annan funktion jag behövde. Jag insåg senare att de skulle komplementera min nav-bar bra, genom att ge en titel på toppen av sidan och kontaktinformation längst ner, vilket knöt ihop sidans funktioner bra. Det gör att man alltid vet vart man är på sidan, och viktig information som mitt email är lätt tillgänglig. 

Kaninbildsidan är jag rätt stolt över. Jag använde en enkel flexbox struktur för att presentera bilderna snabbt och enkelt. Kort sammanfattat så är det en flex rad som håller dom 2 kolumnerna jämnt på sidan, och sedan respektive flex kolumn som håller bilderna raka. Sedan så gav jag alla bilder en fast bredd, vilket gjorde att bara höjden varierar mellan bilder. Detta ger en uniform och simpel design som gör att alla bilder är ungefär lika stora, oavsett ursprungsstorlek. 

Designproblem: 
Här var det många. Jag kommer nog bara gå igenom dom största problem och hur jag löste de, då jag själv knappt kommer ihåg alla hinder på vägen.

Min nav-bar skapade stora problem innan jag visste vad flexbox var. Jag försökte göra det med en liststruktur, vilket fungerade okej så länge nav-baren var på toppen av hemsidan. Men när jag sen ville göra den inte bara vertikal på skärmens kant, men även fast på skärmen, så slutade allt fungera. Jag provade många sätt att lösa det på, men landade slutligen vid att be om hjälp, där jag upptäckte flexbox systemet. Det har jag använt sen dess, vilket automatiskt justerar innehållet så att alla alternativ ligger ovanpå varandra. Med flexbox så var det så enkelt som att ge nav-baren en position:fixed tagg och sedan ge sidinnehållet en 20% margin på vänster sida, vilket automatiskt flyttar text och bilder som om nav-baren var en del av sidinnehållet.

En stund försökte jag även få nav-baren att dynamiskt ändra bredd baserat på skärmens storlek, med en maxbredd bestämt i pixlar. Detta var ännu ett misstag. Problemet var att den tidigare nämnda 20% margin på sidinnehållet inte längre fungerade, då nav-barens storlek ändrades. Det gjorde att sidan såg bra ut i normal 1920x1080 storlek, med varierande grader av oläslighet mellan det och mobiltelefonstorlek på skärmen. Jag försökte lösa det genom att ge samma dynamiska storlek till sidinnehållet, men insåg senare att problemet var blandingen av dynamisk bredd i % och maxbredd i pixlar. Översättningen mellan det och sidinnehållet blev komplicerad, och jag slutade med att ge en maxbredd till nav-baren i procent och samma bredd till marginen på sidinnehållet. Ibland är lösningen att helt enkelt ta bort problemet utan att lösa det.
