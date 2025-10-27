import React, { useState, useEffect } from "react";
import "./Customers.css";


const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://localhost:5000/api/customer") 
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch customers");
        return res.json();
      })
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch customers");
        setLoading(false);
      });
  }, []);



  const formatDateTime = (dateString) => {
    if (!dateString) return "—";


    const date = new Date(dateString);
    if (isNaN(date)) return dateString; 


    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();


    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12; 
    hours = String(hours).padStart(2, "0");


    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  };


  if (loading) return <p>Loading customers...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div className="customers-container">
      <h2>Customers</h2>
      <table className="customers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Created Date</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.mobile}</td>
              <td>{c.age}</td>
              <td>{formatDateTime(c.createdDate || c.created_date)}</td>
              <td>{c.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Customers;