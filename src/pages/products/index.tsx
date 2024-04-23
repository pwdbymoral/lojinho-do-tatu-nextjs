import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';
import CategoryFilter from '@/components/CategoryFilter';
import { Product } from '@/models/product.interface';

const filterProducts = (products: Product[], selectedCategory: string) => {
  const filteredProducts = products.filter(
    (product) =>
      product.tags.includes(selectedCategory) ||
      selectedCategory === 'Todos os Produtos'
  );
  return filteredProducts;
};

const Products: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setselectedCategory] =
    useState<string>('Todos os Produtos');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../api/products');
        const data: Product[] = await response.json();
        setProducts(data);
        const productTags: Array<string> = data.flatMap(
          (product: Product) => product.tags
        );
        const uniqueTags = new Set(productTags);
        setCategories(Array.from(uniqueTags));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = (category: string) => {
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
