import React from 'react';

// Sample data
const products = [
    { id: 1, sku: "abc", productName: "name 1", category: 1 },
    { id: 2, sku: "def", productName: "name 2", category: 2 },
    { id: 3, sku: "ghi", productName: "name 1", category: 2 },
    { id: 4, sku: "klm", productName: "name 1", category: 3 },
    { id: 5, sku: "xyz", productName: "name 1", category: 1 }
];

const pricing = [
    { sku: "abc", price: 10 },
    { sku: "def", price: 20 },
    { sku: "ghi", price: 30 },
    { sku: "klm", price: 40 },
    { sku: "xyz", price: 50 }
];

const categories = [
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
    { id: 3, name: "category 3" },
    { id: 4, name: "category 4" },
    { id: 5, name: "category 5" }
];

const ProductList = ({ products, pricing, categories }) => {
    // Create a map of prices by SKU for quick lookup
    const priceMap = pricing.reduce((map, item) => {
        map[item.sku] = item.price;
        return map;
    }, {});

    // Create a map of categories by ID for quick lookup
    const categoryMap = categories.reduce((map, category) => {
        map[category.id] = category.name;
        return map;
    }, {});

    // Merge products with their prices and categories
    const mergedProducts = products.map(product => ({
        ...product,
        price: priceMap[product.sku] || 0, // Default to 0 if no price is found
        categoryName: categoryMap[product.category] || "Unknown Category"
    }));

    return (
        <div>
            <h1>Product List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>SKU</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {mergedProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.sku}</td>
                            <td>{product.productName}</td>
                            <td>{product.categoryName}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Usage
const App = () => (
    <ProductList products={products} pricing={pricing} categories={categories} />
);

export default App;