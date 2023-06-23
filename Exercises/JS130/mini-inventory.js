/* eslint-disable max-len */
let ItemManager = {
  items: [],

  create (itemName, category, quantity) {
    if (itemName.length >= 5 &&
      category.length >= 5 &&
      !category.includes(' ') &&
      quantity !== undefined) {
      this.items.push(new Item(itemName, category, quantity));
      return true;
    } else {
      return false;
    }
  },

  update (skuCode, ...args) {
    let foundItem = this.items.find(item => item.skuCode === skuCode);
    Object.assign(foundItem, ...args);
  },

  delete (skuCode) {
    let foundIndex = this.items.findIndex(item => item.skuCode === skuCode);
    this.items.splice(foundIndex,1);
  },

  inStock() {
    let inStockItems = this.items.filter (item => item.quantity > 0);
    inStockItems.forEach (item => console.log(item));
  },

  itemsInCategory(category) {
    let filteredItems = this.items.filter (item => item.category === category);
    filteredItems.forEach(item => console.log(item));
  }

};

function Item (itemName, category, quantity) {
  this.skuCode = (itemName.slice(0,3) + category.slice(0,2)).toUpperCase();
  this.itemName = itemName;
  this.category = category;
  this.quantity = quantity;
}

let ReportManager = {
  items: [],

  init (source) {
    this.items = source.items;
  },

  createReporter(skuCode) {
    let foundItem = this.items.find(item => item.skuCode === skuCode);
    return {
      itemInfo() {
        for (let property in foundItem) {
          console.log(`${property}: ${foundItem[property]}`);
        }
      }
    };
  },

  reportInStock() {
    let inStockItems = this.items.filter(item => item.quantity > 0);
    let inStockItemNames = [];
    inStockItems.forEach(item => inStockItemNames.push(item.itemName));
    console.log(inStockItemNames.toString());
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);


ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();


ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();

// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10