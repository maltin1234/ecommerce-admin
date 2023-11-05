"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  console.log(_id, "id");
  async function createdProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    try {
      if (_id) {
        // Update existing product
        await axios.put("/api/products", { ...data, _id });
      } else {
        // Create a new product
        await axios.post("/api/products", data);
      }
      // Set the state to navigate after a successful request
      setGoToProducts(true);
    } catch (error) {
      // Handle any errors that may occur during the HTTP request
      console.error("Error creating/updating product:", error);
    }
  }

  useEffect(() => {
    if (goToProducts) {
      // Use the router to navigate to the products page
      router.push("/products");
    }
  }, [goToProducts, router]);

  return (
    <>
      <form onSubmit={createdProduct}>
        <h1>New Product</h1>
        <label>Product Name</label>
        <input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="product name"
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
        <label>Price (in usd)</label>
        <input
          type="text"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
          placeholder="price"
        />
        <button type="submit" className="btn-primary">
          SUBMIT
        </button>
      </form>
    </>
  );
}
