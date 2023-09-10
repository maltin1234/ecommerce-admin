import mongoose, { model, models, Schema } from "mongoose";
const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
