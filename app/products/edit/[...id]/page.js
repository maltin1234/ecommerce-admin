"use client";
import ProductForm from "@/app/components/ProductForm";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams(); // Destructure the "id" parameter from useParams
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    // Use the "id" parameter from the URL for the GET request
    axios
      .get(`/api/products?id=` + id)
      .then((response) => {
        const products = response.data.products;
        const foundProduct = products.find((product) => product._id === id);
        if (foundProduct) {
          setProductInfo(foundProduct);
        } else {
          console.warn(`Product with id ${id} not found.`);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]); // Include "id" in the dependency array to re-run the effect when it changes
  console.log(productInfo, "hello");
  return <>{productInfo && <ProductForm {...productInfo}></ProductForm>}</>;
}
