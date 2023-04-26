
function addItemToInventory(index) {
    inventory.push({
      itemName: chestItems[index].itemName, 
      info: chestItems[index].info,
      durability: chestItems[index].durability
    });
    chestItems.splice(index, 1);
    updateView();
}


function toggleInventory() {
  inventoryDiv = document.getElementById("inventoryDiv");

  if (inventoryDiv.style.display === "none") {
    inventoryDiv.style.display = "block";
  } else {
    inventoryDiv.style.display = "none";
  }
}


function showInfo(element) {
  element.innerHTML = `${inventory[element.id].itemName}  -  ${inventory[element.id].info}`;
}


function removeItemFromInventory(index) {    // Man kan kaste gjenstanden om man vil
  inventory.splice(index, 1);
  updateView();
}


// function useItem(index) { 
//  inventory[index].durability -= 10;

//  if(inventory[index].durability == 0) {
//   itemMessage = `Your ${inventory[index].itemName} broke!`;
//   console.log(itemMessage);
//   document.getElementById('message').innerHTML = itemMessage;
//   inventory.splice(index, 1);  // Gjenstanden forsvinner når den er ødelagt
//  }
//   updateView(); 
// } 


function useItem(index) { 
  inventory[index].durability -= 10;
 
  if(inventory[index].durability < 0) {
   itemMessage = `Your ${inventory[index].itemName} was consumed!`;
   document.getElementById('message').innerHTML = itemMessage;
   setTimeout(function() {
     inventory.splice(index, 1);  // Gjenstanden forsvinner når den er ødelagt
     updateView(); 
   }, 1500); // 1 sekund tidsforsinkelse før oppdatering av visningen
  } else {
    updateView();
  }
 }