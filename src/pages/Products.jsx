import React, { useState } from "react";
import './Products.css';

const Products = () => {
  // 8 products with images directly
  const [products] = useState([
    {
      id: 1,
      name: "Classic White Shirt",

      price: 1499,
      status: "Active",
      image: "/assets/classicwhiteshirt.webp",
      sku: "WS002",
      supplier: "JAZZ",
      created: "2025-08-10",

    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 2499,
      status: "Active",
      image: "/assets/denimjacket.webp",
      sku: "DJ001",
      supplier: "ELITE",
      created: "2025-08-10",
    },
    {
      id: 3,
      name: "Floral Maxi Dress",
      price: 1999,
      status: "Active",
      image: "/assets/floraldress.jpg",
      sku: "FMD001",
      supplier: "GlowPro",
      created: "2025-08-10",
    },
    {
      id: 4,
      name: "Kids Cotton T-Shirt",
      price: 799,
      status: "Active",
      image: "/assets/kidstshirt.jpg",
      sku: "KCT001",
      supplier: "Radiant",
      created: "2025-08-10",
    },
    {
      id: 5,
      name: "Leather Belt",
      price: 899,
      status: "Active",
      image: "/assets/leatherbelt.webp",
      sku: "LB001",
      supplier: "Velvet",
      created: "2025-08-10",
    },
    {
      id: 6,
      name: "Woman Handbag",
      price: 2799,
      status: "Active",
      image: "/assets/womenhandbag.jpg",
      sku: "WH001",
      supplier: "FabTrend",
      created: "2025-08-10",
    },
    {
      id: 7,
      name: "Running Shoes",
      price: 3199,
      status: "Active",
      image: "/assets/runningshoes.png",
      sku: "RS001",
      supplier: "Techno",
      created: "2025-08-10",
    },
    {
      id: 8,
      name: "Heeled Sandals",
      price: 2599,
      status: "Active",
      image: "/assets/heeledsandals.jpg",
      sku: "HS001",
      supplier: "GlowPro",
      created: "2025-08-10",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [viewProductId, setViewProductId] = useState(null);

  const toggleViewProduct = (id) => {
    setViewProductId(viewProductId === id ? null : id);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toString().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      <div className="product-header">
        <h2>Products</h2>
        <div className="product-actions">
          <input
            type="text"
            placeholder="Search by name, ID, or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-btn">+ Add Product</button>
          <button className="export-btn">Export CSV</button>
        </div>
      </div>

      <div className="product-content">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              {/* <th>Category</th> */}
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                {/* <td>{product.category}</td> */}
                <td>₹{product.price.toLocaleString()}</td>
                <td>
                  <span
                    className={
                      product.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {product.status}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => toggleViewProduct(product.id)}
                  >
                    {viewProductId === product.id ? "Hide" : "View"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {viewProductId && (
          <div className="product-details">
            <img
              src={products.find((p) => p.id === viewProductId)?.image}
              alt={products.find((p) => p.id === viewProductId)?.name}
              className="product-image"
            />
            <h3>{products.find((p) => p.id === viewProductId)?.name}</h3>
            <p>{products.find((p) => p.id === viewProductId)?.description}</p>
            <p>
              <strong>SKU:</strong> {products.find((p) => p.id === viewProductId)?.sku}
            </p>
            <p>
              <strong>Supplier:</strong> {products.find((p) => p.id === viewProductId)?.supplier}
            </p>
            <p>
              <strong>Created:</strong> {products.find((p) => p.id === viewProductId)?.created}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
