/*
Ta utgangspunkt i koden under som lager en modell for en 3×3 labyrint. (3×3 rom).

Gå videre med dette og lag funksjonen updateView() som leser modellen og lager HTML for en tabell
(med <TABLE> <TR> <TD>) og riktige css klasser - ut fra feltet type i hvert objekt i modellen under.
*/



// Model

/*
Lager et nytt objekt "mazeModel" som har to egenskaper: "size" og "rows".
size - en verdi for størrelsen til labyrinten.
rows - et array av arrays. De forskjellige arrayene har objekter i seg som bestemmer utseendet til rutene.
*/


/*
Rader -> bortover
Kolonner -> nedover
*/



let mazeModel = {
    size: 2
    // rows: [
    //     [
    //         { isHigh: false, isWide: false, isOpen: false },
    //         { isHigh: false, isWide: true, isOpen: false },
    //         { isHigh: false, isWide: false, isOpen: false },
    //         { isHigh: false, isWide: true, isOpen: false },
    //         { isHigh: false, isWide: false, isOpen: false },
    //     ],
    //     [
    //         { isHigh: true, isWide: false, isOpen: false },
    //         { isHigh: true, isWide: true },
    //         { isHigh: true, isWide: false, isOpen: false },
    //         { isHigh: true, isWide: true },
    //         { isHigh: true, isWide: false, isOpen: false },
    //     ],
    //     [
    //         { isHigh: false, isWide: false, isOpen: false },
    //         { isHigh: false, isWide: true, isOpen: false },
    //         { isHigh: false, isWide: false, isOpen: false },
    //         { isHigh: false, isWide: true, isOpen: false },
    //         { isHigh: false, isWide: false, isOpen: false },
    //     ],
    //     [
    //         { isHigh: true, isWide: false, isOpen: false },
    //         { isHigh: true, isWide: true },
    //         { isHigh: true, isWide: false, isOpen: false },
    //         { isHigh: true, isWide: true },
    //         { isHigh: true, isWide: false, isOpen: false },
    //     ],
    //     [
    //         { isHigh: false, isWide: false, isOpen: false },
    //         { isHigh: false, isWide: true, isOpen: false },
    //         { isHigh: false, isWide: false, isOpen: false },
    //         { isHigh: false, isWide: true, isOpen: false },
    //         { isHigh: false, isWide: false, isOpen: false },
    //     ],
    // ]
};


// View

/*
<table></table> = tabellen
<tr></tr>       = table row
<td></td>       = table data (innhold)
*/

// updateView();
function updateView() {
    let tableElem = document.getElementById("tableId");


    for (let i = 0; i < mazeModel.rows.length; i++) {        // Looper igjennom hvert array i mazeModel. "i" representerer hver RAD.
        let tr = document.createElement('tr');              // For hvert array opprettes en tr (table row) 

        for (let j = 0; j < mazeModel.rows[i].length; j++) {  // Looper igjennom hvert enkelte objekt i hvert array. "j" representerer hver KOLONNE.
            // console.log(mazeModel.rows[i][j].isHigh);
            
            
            let td = document.createElement('td');         // For hvert objekt opprettes en td (table data).

            td.setAttribute('onclick', 'toggleWall(' + i + ', +' + j + ')');  // Hver "td" (rute) får en onclick med funksjonen "toggleWall".
            

            if (mazeModel.rows[i][j].isHigh) {   // Sjekker om hver enkelte celle i mazeModel har en verdi "isHigh" satt til true.
                td.classList.add("high");       // Om isHigh = true, vil "td" få styling verdien som er i td.high, dvs. en høy rute.
            }
            
            if (mazeModel.rows[i][j].isWide) {   // Sjekker om hver enkelte celle i mazeModel har en verdi "isWide" satt til true.
                td.classList.add("wide");       // Om isWide = true, vil "td" få styling verdien som er i td.wide, dvs. en bred rute.
            }
            
            if (mazeModel.rows[i][j].isOpen) {   // Sjekker om hver enkelte celle i mazeModel har en verdi "isOpen" satt til true.
                td.classList.add("noWall");     // Om isOpen = true, vil "td" få styling verdien som er i td.wall, dvs. en svart bakgrunnsfarge. 
            }
            
            if (mazeModel.rows[i][j].isOpen == false) {   // Sjekker om hver enkelte celle i mazeModel har en verdi "isOpen" satt til false.
                td.classList.add("wall");                // Om isOpen = false, vil "td" få styling verdien som er i td.noWall, dvs. en hvit bakgrunnsfarge. 
            }
            
            if (mazeModel.rows[i][j].isWide && mazeModel.rows[i][j].isHigh) {  // Sjekker om hver enkelte celle i mazeModel har en verdi "isWide" satt til true
                td.classList.add("room");                                    // OG en verdi "isHigh" satt til true. Hvis begge er true, får "td" 
            }                                                                // styling verdien som er i td.room, dvs. en høy OG bred rute. 


            tr.appendChild(td);    // Sier at "td" er et child av tr. Eks for child, har man en div og legger til et "table" vil table være child av div-en.
            // Eks for child: har man en div og legger til et "table" vil table være child av div-en.

            tableElem.appendChild(tr); // Sier at "tr" er et child av "tableElem".

            //console.log(tr);
        }
    }
}

// Controller


/*
Lag så en funksjon initModel(), som dynamisk lager modell for labyrinten med tilfeldige åpne og lukkede vegger.
 
La den ta et tall som parameter, denne angir ønsket størrelse,
for eksempel betyr 2 som parameter at det er ønsket en 2×2-labyrint som i eksempel-modellen over. 
 
Husk at første og siste rad og første og siste kolonne aldri skal ha åpne vegger.

--------------------------------------------------------------------------------------------------------------------------------------
 
- Lag en klikk-funksjon, slik at når du klikker på en vegg, endres isOpen til det motsatte av hva den var - og så kalles updateView().

 
- Endre initModel() slik at den legger til en tilfeldig inngang og en tilfeldig utgang. Disse skal være på motstående sider. 
*/


function toggleWall(row, col) {
    mazeModel.rows[row][col].isOpen = !mazeModel.rows[row][col].isOpen;
    console.log('test');
    updateView();
}

function handleClick(row, col) {
    const newGrid = [...this.state.grid];   // ... = spread operator
    newGrid[row][col].isOpen = !newGrid[row][col].isOpen;
    this.setState({ grid: newGrid });
  }


function initModel(gridSize) {
    mazeModel = {};

    mazeModel.size = gridSize;

    let colCount = gridSize * 2 + 1;  // colCount er lik 5 om mazeModel.size = 2

    mazeModel.rows = [];

    for (let row = 0; row < colCount; row++) {
        mazeModel.rows[row] = [];   // Oppretter nye arrays colCount ganger

        for (let column = 0; column < colCount; column++) { // Går så lenge som antall kolonner

            let newObject = new Object();  // Den nye labyrinten

            if (column % 2 == 0) {
                newObject.isOpen = false; /* High walls */
            }
            else {
                newObject.isWide = true; /* Wide walls */
            }

            if (row % 2 == 0) {
                newObject.isOpen = false; /* Vannrett walls */
            }
            else {
                newObject.isHigh = true;  /* Høye kolonner */
            }

            mazeModel.rows[row].push(newObject);   // Et nytt objekt pushes inn i alle indexene (plassene) til mazeModel.rows

            // if (row == 0 || row == colCount - 1) {
            //      newObject.isHigh = false;
            //      newObject.isOpen = false;
            // }

            // if (column == 0 || column == gridSize * 2) {
            // newObject.isOpen = false;
            // newObject.isWide = false;
            // }
            /*

            Modulo forklaring med eks:

            - I for-løkka over skriver jeg at column = 0

            - Så i if-setninga under skriver jeg dette: column % 2 == 0

            - Det betyr at vi vil noe skal skje om resten vi har etter å dele column (0) på 2 er likt 0.

            - Resten av å dele 0 med 2 vil bli sant annenhver gang for hvert tall vi har i column sin plass.

            - F.eks. vil resten av å dele 0 med 2 bli 0 (false), men resten av å dele 1 med med 2 vil ikke bli 0 (true).

            - Avhengig om vi får true eller false her vil if og else setningene under endre newObject sine isWide verdier.
            */

        }
    }
    updateView();
}

initModel(4);  // Kan kjøres med hvilket tall vi vil (endrer størrelsen på labyrinten).