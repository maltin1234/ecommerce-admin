"use client";
import { useState } from "react";
import axios from "axios";
export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  async function createdProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
  }
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
