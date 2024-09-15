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
