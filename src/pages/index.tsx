import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import PopularProducts from '@/components/PopularProducts';
import SaleProducts from '@/components/SaleProducts';
import Footer from '@/components/Footer';
import type { Product } from '@/models/product.interface';

/**
 * The Homepage component serves as the main entry point for the application.
 *
 * It displays the following elements:
 *  - Navbar component
 *  - Banner component
 *  - Popular Products: Displays a section showcasing 4 popular products using the PopularProducts component.
 *  - Sale Products: Displays a section showcasing 4 sale products using the SaleProducts component.
 *  - "Veja todos os produtos" button:  This button links users to the '/produtos' page to view all products.
 *  - Footer component
 *
 * The Homepage component fetches product data from the '/api/products' endpoint using the useEffect hook.
 * In case of errors, it logs them to the console.
 *
 */
const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('/api/products');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData()
      .then(() => {
        console.log('Products fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <main>
      <Header />
      <Banner />
      <PopularProducts products={products.slice(0, 4)} />
      <SaleProducts products={products.slice(4, 9)} />

      <div className="container mx-auto flex justify-center">
        <button
          type="button"
          className="button text-md mb-4 rounded-full bg-primary px-4 py-2 lg:hover:bg-primary-300"
        >
          <Link href="/produtos">Veja todos os produtos</Link>
        </button>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
