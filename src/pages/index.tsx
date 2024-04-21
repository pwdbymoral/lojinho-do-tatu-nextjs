import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import PopularProducts from '@/components/PopularProducts';
import SaleProducts from '@/components/SaleProducts';
import Footer from '@/components/Footer';
import { Product } from '@/models/product.interface';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Using useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
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
