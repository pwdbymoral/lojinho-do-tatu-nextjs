import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import PopularProducts from '@/components/PopularProducts';
import SaleProducts from '@/components/SaleProducts';
import Footer from '@/components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
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
}
