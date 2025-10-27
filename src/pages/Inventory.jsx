import React, { useState, useEffect } from "react";
import "./Inventory.css";


const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewInventoryId, setViewInventoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const parseCustomDate = (dateStr) => {
    if (!dateStr) return null;


    try {
    
      const [datePart, timePart, ampm] = dateStr.split(" ");
      const [day, month, year] = datePart.split("-");
      let [hours, minutes, seconds] = timePart.split(":").map(Number);


   
      if (ampm?.toUpperCase() === "PM" && hours < 12) hours += 12;
      if (ampm?.toUpperCase() === "AM" && hours === 12) hours = 0;


      const isoString = `${year}-${month}-${day}T${String(hours).padStart(
        2,
        "0"
      )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


      return new Date(isoString);
    } catch {
      return null;
    }
  };


  useEffect(() => {
    fetch("https://localhost:5000/api/inventory")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch inventory");
        return res.json();
      })
      .then((data) => {
        setInventory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load inventory");
        setLoading(false);
      });
  }, []);


  const toggleViewInventory = (id) => {
    setViewInventoryId(viewInventoryId === id ? null : id);
  };



  const filteredInventory = inventory.filter(
    (item) =>
      item.id.toString().includes(searchTerm) ||
      (item.productName &&
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.sku &&
        item.sku.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.supplier &&
        item.supplier.toLowerCase().includes(searchTerm.toLowerCase()))
  );


  if (loading) return <p>Loading inventory...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <h2>Inventory</h2>
        <div className="inventory-actions">
          <input
            type="text"
            placeholder="Search by ID, product, SKU, or supplier"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-btn">+ Add Inventory</button>
          <button className="export-btn">Export CSV</button>
        </div>
      </div>


      <div className="inventory-content">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Created Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.id} onClick={() => toggleViewInventory(item.id)}>
                <td>{item.id}</td>
                <td>{item.productName || "—"}</td>
                <td>{item.stock}</td>


        
                <td>
                  {item.createdDate || item.created_date
                    ? parseCustomDate(
                        item.createdDate || item.created_date
                      )?.toLocaleString() || "Invalid Date"
                    : "—"}
                </td>


                <td>
                  <span
                    className={
                      item.is_active || item.active
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {item.is_active || item.active ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>



        {viewInventoryId && (
          <div className="inventory-details">
            {(() => {
              const selected = inventory.find(
                (item) => item.id === viewInventoryId
              );
              if (!selected) return null;
              return (
                <>
                  <h3>Inventory #{selected.id}</h3>
                  <p>
                    <strong>Product:</strong> {selected.productName || "—"}
                  </p>
                  <p>
                    <strong>SKU:</strong> {selected.sku || "—"}
                  </p>
                  <p>
                    <strong>Supplier:</strong> {selected.supplier || "—"}
                  </p>
                  <p>
                    <strong>Stock:</strong> {selected.stock}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {selected.is_active || selected.active
                      ? "Active"
                      : "Inactive"}
                  </p>
                  <p>
                    <strong>Created Date:</strong>{" "}
                    {selected.createdDate || selected.created_date
                      ? parseCustomDate(
                          selected.createdDate || selected.created_date
                        )?.toLocaleString() || "Invalid Date"
                      : "—"}
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


export default Inventory;