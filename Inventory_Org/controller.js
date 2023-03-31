
// Det som endrer dataene våre/funksjoner:

function assignInventory() {
    inventory = document.getElementById('inventoryDiv').value;
}



/*
Lag en funksjon som lytter etter klikk-arrangementer 
på objekter som kan plukkes opp. 

Når et objekt blir klikket på, 
skal funksjonen legge det til i inventory-listen.
*/


// .find() returnerer verdien til det første elementet som blir godkjent av testen.

/*
I addFoundItemToInventory() funksjonen, 
kan du finne ut hvilket bilde som ble klikket på ved å sjekke event.target. 

Siden bildene har en bestemt rekkefølge, 
kan du bruke indeksen til å hente ut det tilsvarende objektet fra foundItems og legge det til i inventory.
*/

/*
Under konverterer vi en samling av elementer (barn av parentNode) til et Array-objekt.

Dette gjør at vi kan bruke indexOf-metoden for å finne indexen (plasseringen) av det klikkede elementet (som er event.target) 
i forhold til de andre elementene i samlingen.
*/

function addFoundItemToInventory(event) {
 const clickedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
 const selectedItem = foundItems[clickedIndex];
 inventory.push(selectedItem);
 updateView();
}


// forEach()-metoden brukes til å gå gjennom elementene i et array.


function checkForItemClick() {
  const itemImgs = document.querySelectorAll('.item_img');

  itemImgs.forEach(itemImg => {
    itemImg.addEventListener('click', addFoundItemToInventory);
  });
}






