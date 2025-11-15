import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ITEMS from "./data/items";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

import Home from "./components/Home";   // ✅ Correct Home import

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [dark, setDark] = useState(false);

  const [openCart, setOpenCart] = useState(false);
  const [selected, setSelected] = useState(null);

  // Cart
  const [cart, setCart] = useState([]);

  // Categories
  const categories = useMemo(
    () => Array.from(new Set(ITEMS.map(i => i.category))),
    []
  );

  // Add to cart
  function handleAdd(item) {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  // Remove item
  function handleRemove(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  // Change qty
  function changeQty(id, qty) {
    setCart(prev =>
      prev.map(p => (p.id === id ? { ...p, qty } : p))
    );
  }

  // After payment → clear cart
  function clearCart() {
    setCart([]);
  }

  // Product filtering
  const filtered = useMemo(() => {
    let res = ITEMS.filter(i =>
      i.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "All") {
      res = res.filter(i => i.category === category);
    }

    if (sort === "low") res = res.sort((a, b) => a.price - b.price);
    if (sort === "high") res = res.sort((a, b) => b.price - a.price);

    return res;
  }, [search, category, sort]);

  return (
    <Router>
      <div className={`appRoot ${dark ? "dark" : ""}`}>
        <Navbar
          onOpenCart={() => setOpenCart(true)}
          cartCount={cart.reduce((s, i) => s + i.qty, 0)}
          search={search}
          setSearch={setSearch}
          dark={dark}
          setDark={setDark}
          category={category}
          setCategory={setCategory}
          categories={categories}
          sort={sort}
          setSort={setSort}
        />

        {/* Routing Pages */}
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />

          {/* PRODUCT LIST PAGE */}
          <Route
            path="/products"
            element={
              <main className="container">
                <h1 className="pageTitle">Fresh picks — colorful & cheerful</h1>

                <section className="grid">
                  {filtered.map(item => (
                    <ProductCard
                      key={item.id}
                      item={item}
                      onAdd={handleAdd}
                      onOpen={setSelected}
                    />
                  ))}
                </section>
              </main>
            }
          />
        </Routes>

        <Footer />

        {/* Product Modal */}
        <ProductModal
          item={selected}
          onClose={() => setSelected(null)}
          onAdd={handleAdd}
        />

        {/* Cart Drawer */}
        <CartDrawer
          open={openCart}
          onClose={() => setOpenCart(false)}
          cart={cart}
          onRemove={handleRemove}
          onChangeQty={changeQty}
          onClearCart={clearCart}     // ✅ Payment clears cart
        />
      </div>
    </Router>
  );
}
