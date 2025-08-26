import React from 'react'
type Product = {
    id?: number;
    name?: string;
    price?: number;
    quantity?: number;
}
export default function Ex2({id, name, price, quantity}: Product) {
  return (
    <div>
      <h2>Product Information</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  )
}
