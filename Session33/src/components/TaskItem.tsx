import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";

export default function TaskItem() {
  const products = useAppSelector((state) => state.changeItem);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      if (cart[index].quantityInCart + 1 > product.quantity) {
        alert("Số lượng sản phẩm vượt quá số lượng trong kho");
        return;
      }
      cart[index].quantityInCart += 1;
    } else {
      if (product.quantity < 1) {
        alert("Sản phẩm đã hết hàng");
        return;
      }
      cart.push({ ...product, quantityInCart: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "ADD_TO_CART", payload: cart });
  };

  return (
    <div className="w-2/4 border">
      <div className="bg-blue-500 text-white p-2">
        <h2>ListProduct</h2>
      </div>
      <div className="bg-white p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-start gap-4 mb-4 border-b pb-2"
          >
            <div className="flex-shrink-0 w-24 h-24 flex items-center">
              <img src={product.img} className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-500">{product.descript}</p>
            </div>
            <div className="relative w-50 h-40 ">
              <div
                className={`absolute top-0 left-0 right-0 text-center ${
                  product.quantity === 0 ? "hidden" : "border bg-gray-200"
                }`}
              >
                {product.quantity}
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 text-center py-1 cursor-pointer ${
                  product.quantity === 0
                    ? "bg-slate-700 text-white"
                    : "border bg-red-500 text-white hover:bg-red-600"
                }`}
                onClick={() => handleAddToCart(product)}
              >
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
