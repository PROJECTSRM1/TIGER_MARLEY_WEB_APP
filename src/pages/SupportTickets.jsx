import React, { useState, useEffect } from "react";
import "./SupportTickets.css";

const SupportTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("https://localhost:5000/api/support_tickets");
        if (!response.ok) throw new Error("Failed to fetch tickets");
        const data = await response.json();
        setTickets(data);
        setFilteredTickets(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

 
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = tickets.filter(
      (ticket) =>
        ticket.description.toLowerCase().includes(value) ||
        ticket.id.toString().includes(value) ||
        ticket.customerId.toString().includes(value)
    );
    setFilteredTickets(filtered);
  };

  if (loading) return <div className="tickets-loading">Loading support tickets...</div>;
  if (error) return <div className="tickets-error">Error: {error}</div>;

  return (
    <div className="tickets-container">
      <div className="tickets-header">
        <h2>Support Tickets</h2>
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredTickets.length === 0 ? (
        <div className="tickets-empty">No tickets found.</div>
      ) : (
        <table className="tickets-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer ID</th>
              <th>Order ID</th>
              <th>Description</th>
              <th>Created Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.customerId}</td>
                <td>{ticket.orderId}</td>
                <td>{ticket.description}</td>
                <td>{ticket.createdDate}</td>
                <td className="status-cell">
                  {ticket.isActive ? (
                    <span className="status-active">Active</span>
                  ) : (
                    <span className="status-closed">Closed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SupportTickets;
