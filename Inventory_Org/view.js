
updateView();
function updateView() {

  inventoryHTML = "Inventory: <br>";


  if(inventory.length > 0){
    inventory.forEach(item => {

      inventoryHTML += `<div id="${inventory.indexOf(item)}" class="item" onclick="showInfo(this)">${item.itemName}</div>`;

      inventoryHTML += `<div id="${inventory.indexOf(item)}">Durability: ${item.durability}</div>`;

      inventoryHTML += `<button onclick="useItem(${inventory.indexOf(item)})">Use item</button>`;
      
      inventoryHTML += `<button onclick="removeItemFromInventory(${inventory.indexOf(item)})">Remove item</button>`;
    }); 
  }

  chestHTML = "Chest: <br>";
  
  

  chestItems.forEach(item => {
    chestHTML += `<div id="${chestItems.indexOf(item)}" class="item" onclick="addItemToInventory(this.id)">${item.itemName}</div> `;
  })


  html = /*HTML*/ `
  
  <div id="inventoryDiv">
    ${inventoryHTML}
  </div>

  <br>

  <div id="message"></div>

  <br>

  <button onclick="toggleInventory()" id="inventoryBtn">Open/close inventory</button>

  <br>

  <div id="chestDiv">
    ${chestHTML}
  </div>
  `;
      
  document.getElementById('app').innerHTML = html;
}
