import React from 'react';

const Product: React.FC = () => {
    // Sample product data (this would typically come from an API)
    const product = {
        id: 1,
        name: 'Sample Product',
        description: 'This is a description of the sample product.',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/150'
    };

    return (
        <div className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;