import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Product from "@/models/Product";

connectDB();

export async function POST(req) {
  const { id } = await req.json();

  try {
    // Connect to the database

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({
        success: false,
        error: "Product not found.",
      });
    }

    return NextResponse.json({
      success: true,
      product: deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({
      success: false,
      error: "An error occurred while deleting the product.",
    });
  }
}
