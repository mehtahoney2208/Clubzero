import React from 'react'
import '../Product.css'
export default function ProductModal({ item, onClose, onAdd }) {
  if (!item) return null
  return (
    <div className="modalBack" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img src={item.img} alt={item.title} />
        <div className="modalInfo">
          <h2>{item.title}</h2>
          <p className="modalCategory">Category: {item.category}</p>
          <p className="modalPrice">Price: ₹{item.price}</p>
          <p className="modalDesc">A stylish product made with attention to details — perfect for everyday use.</p>
          <div className="modalBtns">
            <button onClick={() => { onAdd(item); onClose() }} className="add">Add to cart</button>
            <button onClick={onClose} className="close">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
