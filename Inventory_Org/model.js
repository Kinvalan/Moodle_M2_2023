/*

INVENTORY ORGANIZER
--------------------

I denne oppgaven skal du bruke det du har lært til nå til å lage et typisk inventory fra et RPG spill. 




Man skal kunne:

1. Plukke opp ting - klikke på noe og så havner det i inventory X


2. Åpne inventory og se hva man har samlet X


3. Velge et item for å se nærmere detaljer om itemet X


4. Kaste fra deg items så de forsvinner fra inventoriet X


5. Bruke opp/ødelegge evt items som kan brukes/ødelegges så de forsvinner fra inventory X



*/


// Dataene våre/let og const:

let html;

let inventory = [];

let chestItems = [
    {itemName: 'Katana', durability: 100, info:'A razor sharp katana'},
    {itemName: 'Mushroom', durability: 20, info:'A delicious mushroom'},
    {itemName: 'Potion', durability: 20, info:'An healing potion'}
];

let inventoryHTML;

let inventoryDiv;

let chestHTML;

let itemMessage;
