"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductForm from "@/app/components/ProductForm";
export default function NewProduct() {
  return <ProductForm />;
}
