import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Premium Store</h1>
          <p>Discover high‑quality products curated just for you.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            {/* <Link to="/about" className="btn-secondary">Learn More</Link> */}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-box">
          <i className="bi bi-truck"></i>
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly at your doorstep.</p>
        </div>
        <div className="feature-box">
          <i className="bi bi-award"></i>
          <h3>Top Quality</h3>
          <p>We offer premium products built to last.</p>
        </div>
        <div className="feature-box">
          <i className="bi bi-shield-check"></i>
          <h3>Secure Payments</h3>
          <p>100% safe & trusted payment methods.</p>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bestsellers">
  <h2>Best Selling Products</h2>

  <div className="product-grid">
    {[
      {
        id: 1,
        title: "Wireless Earbuds",
        price: 999,
        img: "/Public/product/Visual_Packshot_Saphir_Black_75268.webp"
      },
      {
        id: 2,
        title: "Leather Wallet",
        price: 599,
        img: "/Public/product/SL7831314_main.webp"
      },
      {
        id: 3,
        title: "Fitness Band",
        price: 1299,
        img: "/Public/product/MYJ33ref_VW_34FR+watch-case-40-aluminum-starlight-nc-se3_VW_34FR+watch-face-40-aluminum-starlight-se3_VW_34FR.jpeg"
      },
      {
        id: 4,
        title: "Hoodie Jacket",
        price: 1099,
        img: "Public/product/bbcbb80817f5bb39d4aa15b12bc054cad7847464.avif"
      }
    ].map((item) => (
      <div key={item.id} className="product-card">
        <img src={item.img} alt={item.title} />
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
        <Link to="/products" className="btn-buy">View Details</Link>
      </div>
    ))}
  </div>
</section>


      {/* EXCLUSIVE */}
      <section className="exclusive">
        <h2>Exclusive Collection</h2>
        <div className="exclusive-grid">
          <img src="/Public/product/bleu-de-chanel-eau-de-toilette-spray-5fl-oz--packshot-default-107480-9564920152094.avif" className="ex-img" />
          <img src="/Public/product/Visual_Packshot_Saphir_Black_75268.webp" className="ex-img" />
        </div>
      </section>
    </div>
  );
}