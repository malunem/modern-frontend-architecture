import React from 'react';
import './ProductListItem.css';

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) {
  return (
    <div className={`card ${isOnSale && 'onsale'}`}>
      <h2>{name}</h2>
      <img src={imageUrl} alt="" />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold out" : "Add to Cart"}
      </button>
    </div>
  );
}