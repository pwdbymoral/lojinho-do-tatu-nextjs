import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import CategoryFilter from '@/components/CategoryFilter';
import type { Product } from '@/models/product.interface';
import { Category } from '@/models/category.interface';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const filterProducts = (
  products: Product[],
  selectedCategory: string
): Product[] => {
  const filteredProducts = products.filter((product) => {
    return (
      selectedCategory === 'Todos os Produtos' ||
      product.categories.some((category) => category.name === selectedCategory)
    );
  });
  return filteredProducts;
};

/**
 * The Products page displays a list of products with category filtering functionality.
 *
 * It consists of the following elements:
 *  - Navbar component
 *  - CategoryFilter: This component allows users to filter products by
 *    category.
 *  - ProductList: Displays a grid of product cards based on the selected
 *    category or all products if "Todos os Produtos" is chosen.
 *  - Footer component
 *
 * The Products page fetches product data from the '/api/products' endpoint
 * using the useEffect hook. In case of errors, it logs them to the console.
 * It utilizes a separate `filterProducts` function to filter the product list
 * based on the selected category.
 */
const Products: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Todos os Produtos');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const productsResponse = await fetch('../api/products');
        const products: Product[] = await productsResponse.json();
        setProducts(products);

        const categoriesResponse = await fetch('../api/categories');
        const categories: Category[] = await categoriesResponse.json();
        setCategories(categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
      .then(() => {
        console.log('Data fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  const filteredProducts = filterProducts(products, selectedCategory);

  return (
    <>
      <Head>
        <title>Produtos - Lojinho do Tatu</title>
      </Head>
      <Header />
      <div className="container mx-auto flex min-h-[calc(100vh-252px)] flex-col py-4 lg:grid lg:grid-cols-5 lg:divide-x lg:divide-gray-400">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />

        <ProductList products={filteredProducts} />
      </div>
      <Footer />
    </>
  );
};

export default Products;
