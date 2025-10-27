import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import AnalyticsReports from "./pages/Analytics-Reports";
import Settings from "./pages/Settings";
import SupportTickets from "./pages/SupportTickets";
import Logout from "./pages/Logout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="analytics-reports" element={<AnalyticsReports />} />
        <Route path="support-tickets" element={<SupportTickets />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logout" element={<Logout />} />

      </Route>
    </Routes>
  );
}

export default App;
