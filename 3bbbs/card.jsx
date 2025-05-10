import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";

const businesses = [
  {
    name: "Bean & Brew Cafe",
    type: "Local Coffee Shop",
    location: [49.3289, -123.1601],
    description: "A cozy place offering fair-trade coffee and community space.",
  },
  {
    name: "North Shore Wellness Co.",
    type: "Health & Wellness",
    location: [49.3302, -123.1555],
    description: "Sustainable and local health products.",
  },
  {
    name: "WestVan Home Decor",
    type: "Interior Design",
    location: [49.3270, -123.1677],
    description: "Eco-friendly and stylish home accessories.",
  },
];

export default function Home() {
  return (
    <div className="page-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">3bbb's</div>
        <div className="nav-links">
          <a href="#customer" className="nav-link">Customer Side</a>
          <a href="#owner" className="nav-link">Owner Side</a>
          <button className="login-button">Login / Sign Up</button>
        </div>
      </div>

      {/* Hero */}
      <div className="hero-section">
        <h1 className="hero-title">Empowering Small Businesses Globally</h1>
        <p className="hero-description">
          3bbb's helps small businesses connect, collaborate, and trade with each other.
        </p>
        <button className="cta-button">Explore Opportunities</button>
      </div>

      {/* Map */}
      <div className="map-section">
        <h2 className="section-title">Local Businesses in West Vancouver</h2>
        <MapContainer center={[49.3289, -123.1601]} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {businesses.map((biz, index) => (
            <Marker position={biz.location} key={index}>
              <Popup>
                <strong>{biz.name}</strong><br />
                {biz.type}<br />
                {biz.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Info Cards */}
      <div className="sections-grid">
        <div id="customer" className="info-card">
          <h3>For Customers</h3>
          <p>Discover and support small businesses that align with your values.</p>
          <ul>
            <li>Find ethical businesses</li>
            <li>Support sustainability</li>
            <li>Shop globally</li>
          </ul>
        </div>

        <div id="owner" className="info-card">
          <h3>For Business Owners</h3>
          <p>Connect with partners, investors, and suppliers to grow your business.</p>
          <ul>
            <li>Find collaborators</li>
            <li>Meet investors</li>
            <li>Source globally</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 3bbb's. All rights reserved.
      </footer>
    </div>
  );
}