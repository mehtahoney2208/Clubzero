import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

export default function Navbar({
  onOpenCart,
  cartCount,
  search,
  setSearch,
  dark,
  setDark,
  category,
  setCategory,
  categories,
  sort,
  setSort,
}) {
  return (
    <header className={`navbar ${dark ? "dark" : ""}`}>
      <div className="nav-container">

        {/* BRAND */}
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            Pastel<span>Lane</span>
          </Link>
        </div>

        {/* LINKS */}
        <nav className="nav-center">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/products" className="nav-item">Products</Link>
        </nav>

        {/* SEARCH + FILTERS */}
        <div className="nav-search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="search-input"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-box"
          >
            <option value="All">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select-box"
          >
            <option value="default">Sort</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        {/* ACTION BUTTONS */}
        <div className="nav-actions">
          <button onClick={() => setDark((d) => !d)} className="nav-btn">
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>

          <button className="nav-btn cart-btn" onClick={onOpenCart}>
            🛒 <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
