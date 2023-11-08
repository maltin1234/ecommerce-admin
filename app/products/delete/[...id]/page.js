"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Page() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=` + id).then((response) => {
      console.log(response.data);
      const products = response.data.products;
      const foundProduct = products.find((product) => product._id === id);
      if (foundProduct) {
        setProductInfo(foundProduct);
      } else {
        console.warn(`Product with id ${id} not found.`);
      }
    });
  }, [id]);
  async function deleteProduct() {
    try {
      console.log("idddd" + id);
      await axios.post(`/api/products/delete`, { id });
      router.back();
    } catch (error) {
      // Handle errors here
      console.error("Error deleting product:", error);
    }
  }

  return (
    <>
      <h1 className="text-center">
        Do you really want to delete? &nbsp; "{productInfo?.title}"?
      </h1>
      <div className="flex gap-2 justify-center">
        <button type="button" onClick={deleteProduct} className="btn-red">
          Yes
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn-default"
        >
          No
        </button>
      </div>
    </>
  );
}
