import React from 'react'
import '../Productcard.css'
export default function ProductCard({ item, onAdd, onOpen }) {
  return (
    <article className="card">
      <div className="imgWrap" onClick={() => onOpen(item)}>
        <img src={item.img} alt={item.title} />
      </div>
      <div className="cardBody">
        <h3>{item.title}</h3>
        <div className="meta">
          <span className="price">₹{item.price}</span>
          <span className="category">{item.category}</span>
        </div>
        <div className="cardActions">
          <button className="add" onClick={() => onAdd(item)}>Add</button>
        </div>
      </div>
    </article>
  )
}
