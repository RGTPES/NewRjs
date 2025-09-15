import axios from "axios";
import React, { useEffect, useState } from "react";
interface Product {
  id?: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
  createAt: string;
}
export default function ListProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const handleGet = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGet();
  }, []);
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <div>{product.id}</div>
            <div>{product.name}</div>
          </>
        );
      })}
    </>
  );
}
