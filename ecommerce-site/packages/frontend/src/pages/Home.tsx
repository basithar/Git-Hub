import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Our E-Commerce Site</h1>
            <p>Discover amazing products at unbeatable prices!</p>
            <button onClick={() => alert('Explore Products!')}>Shop Now</button>
        </div>
    );
};

export default Home;