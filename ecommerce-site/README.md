# E-Commerce Site

## Overview
This is a full-stack e-commerce website project that includes both frontend and backend components. The frontend is built using React, while the backend is powered by Node.js and Express. This project aims to provide a seamless shopping experience, allowing users to browse products, view details, and manage their shopping cart.

## Project Structure
The project is organized into two main packages: `frontend` and `backend`. Below is a brief overview of each package:

### Frontend
- **Technologies**: React, TypeScript, CSS
- **Entry Point**: `packages/frontend/src/index.tsx`
- **Main Component**: `packages/frontend/src/App.tsx`
- **Pages**: 
  - Home Page: `packages/frontend/src/pages/Home.tsx`
  - Product Page: `packages/frontend/src/pages/Product.tsx`
- **Styles**: `packages/frontend/src/styles/main.css`

### Backend
- **Technologies**: Node.js, Express, TypeScript
- **Entry Point**: `packages/backend/src/index.ts`
- **Routes**:
  - Products: `packages/backend/src/routes/products.ts`
  - Authentication: `packages/backend/src/routes/auth.ts`
- **Controllers**: `packages/backend/src/controllers/productsController.ts`
- **Models**: `packages/backend/src/models/product.ts`
- **Database Utilities**: `packages/backend/src/utils/db.ts`

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-site
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd packages/frontend
   npm install
   cd ../backend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd packages/backend
   npm start
   ```

2. In a new terminal, start the frontend application:
   ```
   cd packages/frontend
   npm start
   ```

### Environment Variables
Create a `.env` file in the `packages/backend` directory based on the `.env.example` file provided. Make sure to set the necessary environment variables for your database connection and other configurations.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.