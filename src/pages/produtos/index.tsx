import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';
import CategoryFilter from '@/components/CategoryFilter';
import type { Product } from '@/models/product.interface';

const filterProducts = (
  products: Product[],
  selectedCategory: string
): Product[] => {
  const filteredProducts = products.filter(
    (product) =>
      product.tags.includes(selectedCategory) ||
      selectedCategory === 'Todos os Produtos'
  );
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
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setselectedCategory] =
    useState<string>('Todos os Produtos');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('../api/products');
        const data: Product[] = await response.json();
        setProducts(data);
        const productTags: string[] = data.flatMap(
          (product: Product) => product.tags
        );
        const uniqueTags = new Set(productTags);
        setCategories(Array.from(uniqueTags));
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

  const handleCategoryClick = (category: string): void => {
    setselectedCategory(category);
  };

  const filteredProducts = filterProducts(products, selectedCategory);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto flex min-h-[77vh] flex-col py-4 md:grid md:grid-cols-5 md:divide-x md:divide-gray-400">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />

        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
