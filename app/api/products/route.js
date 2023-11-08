import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
connectDB();
export async function POST(req) {
  const { title, description, price } = await req.json();

  try {
    // Connect to the database

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

export async function GET() {
  try {
    // No need to connect to the database here, as the connection is already established during server startup.

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
    // No need to connect to the database here, as the connection is already established during server startup.

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
export async function DELETE(req) {
  const id = req.query.id;

  try {
    // No need to connect to the database here, as the connection is already established during server startup.

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
