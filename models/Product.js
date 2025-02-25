import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String
});

const Product = model('Product', productSchema);

export default Product;
