// Task 1
// The initialization of the inventory array with item name, price, quantity and when the stock is considered to be low
const inventory = [

  { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    
  { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    
  { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    
  { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    
  { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 },
];

// Task 2
function displayProductDetails(inventory){
  // Ternary operator used to determine the stock status
  const status = inventory.quantity <= inventory.lowStockLevel ? "Low Stock" : "In Stock";
  //Returns the product information
  return `Product:${inventory.name}
  Price: $${inventory.price},  
  Quantity: ${inventory.quantity}
  Stock Level: ${status}`
}

// Iterates through the inventory array
for(let i= 0; i < inventory.length; i++) {
  // Outputs inventory information by calling the function
console.log(displayProductDetails(inventory[i]));
};

//Task 3
function updateStock(inventory, unitsSold){
 // Updates the value for inventory quantity by subtracting the units that were sold
  inventory.quantity -= unitsSold;
   // Evaluates the quantity of each product to determine if it is low stock, in stock or out of stock
   if (inventory.quantity <= inventory.lowStockLevel){
     
     return`${inventory.name} is Low stock`
     
   }  else {
    
  return `${inventory.name} is In Stock`
  
  }
 };

  //Iterates through the array and logs the updated stock for each item
   for(let i= 0; i < inventory.length; i++) {
  console.log(updateStock(inventory[i]));
  };

  //Task 4

  function checkLowStock(inventory){
    // Iterates through the array to find the items that are low stock and displays those items
      for(let i= 0; i < inventory.length; i++) {
      if (inventory[i].quantity <= inventory[i].lowStockLevel){
        return`Items that are low stock are: ${inventory[i].name}`;
      } else {
        return `Product is in Stock`
      }
      }
   // })
    
  };
console.log(checkLowStock(inventory)); // Displays the results

//Task 5
function calculateInventoryValue(inventory){
  
  let totalPrice= 0; // Declares the total price variable
  
  for(let i= 0; i < inventory.length; i++) {
  totalPrice += inventory[i].quantity * inventory[i].price; // Calculates the total price by multiplying the price and quantity
  }
  
  return `The total Value is $${totalPrice}`;
}
console.log(calculateInventoryValue(inventory)); // Outputs the total price