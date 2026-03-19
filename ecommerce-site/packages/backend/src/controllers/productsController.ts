import { Request, Response } from 'express';
import Product from '../models/product';

class ProductsController {
    async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const product = await Product.findById(id);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error });
        }
    }

    async createProduct(req: Request, res: Response): Promise<void> {
        const newProduct = new Product(req.body);
        try {
            const savedProduct = await newProduct.save();
            res.status(201).json(savedProduct);
        } catch (error) {
            res.status(400).json({ message: 'Error creating product', error });
        }
    }

    async updateProduct(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedProduct) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: 'Error updating product', error });
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error });
        }
    }
}

export default new ProductsController();