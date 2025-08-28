import React, { use, useMemo } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

const cartItems: CartItem[] = [
  { id: 1, name: "Ao thun", price: 120000, quantity: 2 },
  { id: 2, name: "Quan jeans", price: 350000, quantity: 1 },
  { id: 3, name: "Giay the thao", price: 500000, quantity: 1 }
]

export default function ShoppingCart() {
 const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [cartItems])

  return (
    <div>
        Tong don hang: {total.toLocaleString()}đ
    </div>
  )
}