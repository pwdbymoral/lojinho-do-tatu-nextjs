import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import PopularProducts from '@/components/PopularProducts';
import SaleProducts from '@/components/SaleProducts';
import type { Product } from '@/models/product.interface';
import CategoryShowcase from '@/components/CategoryShowcase';
import type { CategoryData } from '@/models/categoryData.interface';
import Button from '@/components/Button';

/**
 * The Homepage component serves as the main entry point for the application.
 *
 * It displays the following elements:
 *  - Navbar component
 *  - HeroBanner component
 *  - Popular Products: Displays a section showcasing 4 popular products using the PopularProducts component.
 *  - Sale Products: Displays a section showcasing 4 sale products using the SaleProducts component.
 *  - "Veja todos os produtos" button:  This button links users to the '/produtos' page to view all products.
 *  - Footer component
 *
 * The Homepage component fetches product data from the '/api/products' endpoint using the useEffect hook.
 * In case of errors, it logs them to the console.
 *
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
    <main>
      <HeroBanner />
      <CategoryShowcase categories={categoriesData} />
      <div className="my-4">
        <PopularProducts products={products.slice(0, 4)} />
        <SaleProducts products={products.slice(4, 9)} />
      </div>

      <div className="container mx-auto my-4 flex justify-center">
        <Button>
          <Link href="/produtos">Veja todos os produtos</Link>
        </Button>
      </div>
    </main>
  );
};

export default HomePage;
