import React, { useState, useEffect } from "react";
import "./Products.css";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
  useEffect(() => {
    fetch("https://localhost:5000/api/products") 
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);


  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Products</h2>
        <div className="products-actions">
          <button className="add-btn">+ Add Product</button>
          <button className="export-btn">Export CSV</button>
        </div>
      </div>


      <div className="products-content">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category ID</th>
              <th>Price (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.product_name}</td>
                <td>{p.category_id}</td>
                <td>{p.price}</td>
                <td>
                  <span
                    className={
                      p.is_active ? "status-active" : "status-inactive"
                    }
                  >
                    {p.is_active ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Products;

