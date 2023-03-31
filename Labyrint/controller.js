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

function toggleWall(){
    if(mazeModel.rows.isOpen % 2 == 0){
        newObject.isOpen = true;
    }
    
}

initModel(4);  // Kan kjøres med hvilket tall vi vil (endrer størrelsen på labyrinten).