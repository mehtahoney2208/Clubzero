import React, { useState } from "react";

export default function CartDrawer({
  open,
  onClose,
  cart,
  onRemove,
  onChangeQty,
  onClearCart   
}) {
  const safeCart = cart || [];

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  if (!open) return null;

  const total = safeCart.reduce((s, it) => s + it.qty * it.price, 0);

  // ----------------------------
  // Payment Handler
  // ----------------------------
  function handlePaymentMode(mode) {
  setShowPaymentPopup(false);
  setPaymentDone(true);

  // EMPTY THE CART
  if (onClearCart) onClearCart();

  setTimeout(() => {
    setPaymentDone(false);
    onClose(); // close drawer
  }, 2000);
}


  return (
    <div
      className="cartBack"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        zIndex: 1500
      }}
    >
      <aside
        className="cartDrawer"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "350px",
          height: "100vh",
          background: "white",
          zIndex: 2000,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        <h3 style={{ padding: "15px", borderBottom: "1px solid #eee" }}>
          Your Bag
        </h3>

        <div
          className="cartList"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "15px"
          }}
        >
          {safeCart.length === 0 && <p>Your cart is empty</p>}

          {safeCart.map((it) => (
            <div
              className="cartItem"
              key={it.id}
              style={{
                display: "flex",
                marginBottom: "15px",
                paddingBottom: "10px",
                borderBottom: "1px solid #ddd"
              }}
            >
              <img
                src={it.img}
                alt={it.title}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "10px"
                }}
              />

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, marginBottom: "5px" }}>
                  {it.title}
                </div>

                <div>
                  ₹{it.price} ×
                  <input
                    type="number"
                    min="1"
                    value={it.qty}
                    onChange={(e) =>
                      onChangeQty(it.id, Math.max(1, Number(e.target.value)))
                    }
                    style={{
                      width: "50px",
                      marginLeft: "5px"
                    }}
                  />
                </div>
              </div>

              <button
                onClick={() => onRemove(it.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  height: "32px"
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div
          className="cartFooter"
          style={{
            padding: "15px",
            borderTop: "1px solid #eee",
            background: "#fff"
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            Total: <strong>₹{total}</strong>
          </div>

          <button
            style={{
              width: "100%",
              padding: "10px",
              background: "#673ab7",
              border: "none",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "15px",
              marginBottom: "20px"
            }}
            onClick={() => setShowPaymentPopup(true)}
          >
            Pay
          </button>
        </div>
      </aside>

      {/* ---------------------- */}
      {/* Payment Mode Popup */}
      {/* ---------------------- */}
      {showPaymentPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3000
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center"
            }}
          >
            <h3>Select Payment Mode</h3>

            <button
              style={btnStyle}
              onClick={() => handlePaymentMode("UPI")}
            >
              UPI
            </button>

            <button
              style={btnStyle}
              onClick={() => handlePaymentMode("Card")}
            >
              Card
            </button>

            <button
              style={btnStyle}
              onClick={() => handlePaymentMode("COD")}
            >
              Cash on Delivery
            </button>
          </div>
        </div>
      )}

      {/* ---------------------- */}
      {/* Payment Success Popup */}
      {/* ---------------------- */}
      {paymentDone && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "22px",
            zIndex: 4000
          }}
        >
          Payment Successful 🎉
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  background: "#673ab7",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px"
};
