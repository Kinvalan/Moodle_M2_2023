
// Det vi vil se:


updateView();
function updateView() {
    let html = /*HTML*/ `
    Inventory:
    <div id="inventoryDiv"></div>

    Chest:
    <div id="chestDiv"></div>

    <img src="img/Katana.png" alt="Katana_Img" class="item_img">     
    <img src="img/Mushroom.png" alt="Mushroom_Img" class="item_img">
    <img src="img/Potion.png" alt="Potion_Img" class="item_img">
    
    `;
    
    document.getElementById('app').innerHTML = html;
}
