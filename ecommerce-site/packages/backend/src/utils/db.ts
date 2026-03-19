import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'your_default_mongodb_uri';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbInstance: any;

export const connectToDatabase = async () => {
    if (!dbInstance) {
        await client.connect();
        dbInstance = client.db('ecommerce');
    }
    return dbInstance;
};

export const getDb = () => {
    if (!dbInstance) {
        throw new Error('Database not initialized. Call connectToDatabase first.');
    }
    return dbInstance;
};