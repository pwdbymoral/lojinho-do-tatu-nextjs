import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import PopularProducts from '@/components/PopularProducts';
import SaleProducts from '@/components/SaleProducts';
import type { Product } from '@/models/product.interface';
import CategoryShowcase from '@/components/CategoryShowcase';
import type { CategoryData } from '@/models/categoryData.interface';
import Button from '@/components/Button';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCarousel from '@/components/CategoryCarousel';

/**
 * Homepage component serves as the main entry point for the application.
 * It fetches products data from the server and displays them on the page using various components.
 * It also includes a hero banner, popular products, sale products, and category showcase.
 */
const HomePage: React.FC = () => {
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

  const categoriesData: CategoryData[] = [
    { name: 'Presentes', url: '/CategoryBanners/banner_presentes.png' },
    { name: 'Acessórios', url: '/CategoryBanners/banner_acessorios.png' },
    { name: 'Equipamentos', url: '/CategoryBanners/banner_equipamentos.png' },
    { name: 'Decoração', url: '/CategoryBanners/banner_decoracao.png' },
  ];

  return (
    <>
      <Head>
        <title>Os melhores produtos de Runeterra - Lojinho do Tatu</title>
      </Head>
      <Header />
      <div className="min-h-[calc(100vh-252px)]">
        <HeroBanner />
        <CategoryShowcase categories={categoriesData} />
        <CategoryCarousel categories={categoriesData} />

        <div className="my-4">
          <PopularProducts products={products.slice(0, 4)} />
          <SaleProducts products={products.slice(4, 9)} />
        </div>

        <div className="container mx-auto my-4 flex justify-center">
          <Button>
            <Link href="/produtos">Veja todos os produtos</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
