import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    imageUrl: string;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;