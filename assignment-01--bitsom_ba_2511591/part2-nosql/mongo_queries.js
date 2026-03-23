// OP1: insertMany() — insert all documents

db.products.insertMany([
{
_id: "ELEC001",
name: "Samsung Galaxy S23",
category: "Electronics",
price: 74999,
specs: {
warranty: "1 year",
voltage: "220V",
brand: "Samsung"
}
},
{
_id: "CLOTH001",
name: "Denim Jacket",
category: "Clothing",
price: 3499,
brand: "Levis",
sizes: ["S","M","L","XL"],
material: "Denim"
},
{
_id: "GROC001",
name: "Organic Milk",
category: "Groceries",
price: 85,
expiry_date: new Date("2024-12-31"),
nutrition: {
protein: "3.2g",
fat: "3.5g",
calories: "60 kcal"
}
}
]);


// OP2: find() — Electronics products with price > 20000

db.products.find({
category: "Electronics",
price: { $gt: 20000 }
});


// OP3: find() — Groceries expiring before 2025-01-01

db.products.find({
category: "Groceries",
expiry_date: { $lt: new Date("2025-01-01") }
});


// OP4: updateOne() — add discount_percent

db.products.updateOne(
{ _id: "ELEC001" },
{ $set: { discount_percent: 10 } }
);


// OP5: createIndex() — index on category

db.products.createIndex({ category: 1 });

// Explanation:
// Index improves query performance when searching by category
