// View

/*
<table></table> = tabellen
<tr></tr>       = table row
<td></td>       = table data (innhold)
*/

updateView
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