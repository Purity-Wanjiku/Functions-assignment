
//Create an array containing the names of all items in the inventory.
let inventory = ["grains","fruits","dairy","vegetables","meat"];
//Create a separate array with the corresponding stock quantities of each item.
let inventories = [100,12,20,20,200];

//Write a function to add a new item to the inventory, updating both arrays.
function stockTaking(items,stock) {
inventory.push(items);
inventories.push(stock);
}
stockTaking("condiments",240)
console.log(inventory);
console.log(inventories);

//Write a function to update the stock quantity of an existing item.
function updateStock() {
    inventories[1] = 30
}
updateStock();
console.log(inventories); 

//Write a function to calculate the total number of items in the inventory.
function totalStock() {
    let add = 0;
    for (let i = 0; i < inventories.length; i++) {
        add += inventories[i] 
    }
    return add
}
stockTaking("condiments",240);
console.log("totalstock",totalStock())
//Write a function to find the item with the lowest stock quantity.
function checkSmallest() {
let smallestValue = 0;
for (let j = 0; j < inventories.length; j++) {
    if (inventories[j] < inventories[smallestValue]) {
        smallestValue = j;
    }
    
}
return inventories[smallestValue]
} 
console.log("lowest",checkSmallest());




    
   
    











