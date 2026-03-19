import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/products';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});