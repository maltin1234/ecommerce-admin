import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description, price } = await req.json();

  try {
    // Connect to the database
    await connectDB();

    // Create a new product
    await Product.create({ title, description, price });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({
      success: false,
      error: "An error occurred while creating the product.",
    });
  }
}
export async function GET(req) {
  try {
    // Connect to the database
    await connectDB();

    // Create a new product
    // Retrieve products
    const products = await Product.find({});

    return NextResponse.json({
      success: true,
      products: products,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return NextResponse.json({
      success: false,
      error: "An error occurred while retrieving products.",
    });
  }
}

export async function PUT(req) {
  const { _id, title, description, price } = await req.json();

  try {
    // Connect to the database
    await connectDB();

    // Find the product by ID and update its properties
    const updatedProduct = await Product.findByIdAndUpdate(_id, {
      title,
      description,
      price,
    });

    if (!updatedProduct) {
      return NextResponse.json({
        success: false,
        error: "Product not found.",
      });
    }

    return NextResponse.json({
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({
      success: false,
      error: "An error occurred while updating the product.",
    });
  }
}
