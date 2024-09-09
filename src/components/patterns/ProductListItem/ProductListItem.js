import React from 'react';
import './ProductListItem.css';

function Heading({ children }) {
  return <h2>{children}</h2>;
}
function Card({ children, highlight }) {
  const cardClassName = highlight ? "card onsale" : "card";
  return <div className={cardClassName}>{children}</div>;
}
function Text({ children }) {
  return <span>{children}</span>;
}
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) {
  return (
    <Card highlight={isOnSale}>
      <Heading>{name}</Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold out" : "Add to Cart"}
      </Button>
    </Card>
  );
}