import React, { useState, useEffect } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewOrderId, setViewOrderId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://localhost:5000/api/orders")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch orders");
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load orders");
        setLoading(false);
      });
  }, []);

  const toggleViewOrder = (id) => {
    setViewOrderId(viewOrderId === id ? null : id);
  };

  
  const filteredOrders = orders.filter(
    (o) =>
      o.id.toString().includes(searchTerm) ||
      (o.customerName &&
        o.customerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (o.productName &&
        o.productName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (o.status &&
        o.status.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>Orders</h2>
        <div className="orders-actions">
          <input
            type="text"
            placeholder="Search by ID, customer, or product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-btn">+ Add Order</button>
          <button className="export-btn">Export CSV</button>
        </div>
      </div>

      <div className="orders-content">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customerName}</td>
                <td>{o.productName}</td>
                <td>₹{o.price.toFixed(2)}</td>
                <td>{o.quantity}</td>
                <td>₹{o.total.toFixed(2)}</td>
                <td>
                  <span
                    className={
                      o.status === "Confirmed"
                        ? "status-confirmed"
                        : o.status === "Pending"
                        ? "status-pending"
                        : "status-cancelled"
                    }
                  >
                    {o.status}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => toggleViewOrder(o.id)}
                  >
                    {viewOrderId === o.id ? "Hide" : "View"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {viewOrderId && (
          <div className="order-details">
            {(() => {
              const selected = orders.find((o) => o.id === viewOrderId);
              return (
                <>
                  <h3>Order #{selected.id}</h3>
                  <p>
                    <strong>Customer:</strong> {selected.customerName}
                  </p>
                  <p>
                    <strong>Product:</strong> {selected.productName}
                  </p>
                  <p>
                    <strong>Price:</strong> ₹{selected.price.toFixed(2)}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {selected.quantity}
                  </p>
                  <p>
                    <strong>Total:</strong> ₹{selected.total.toFixed(2)}
                  </p>
                  <p>
                    <strong>Status:</strong> {selected.status}
                  </p>
                  <p>
                    <strong>Order Date:</strong>{" "}
                    {new Date(selected.orderDate).toLocaleString()}
                  </p>
                  <p>
                    <strong>Created Date:</strong>{" "}
                    {new Date(selected.createdDate).toLocaleString()}
                  </p>
                  <p>
                    <strong>Active:</strong> {selected.isActive ? "Yes" : "No"}
                  </p>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
