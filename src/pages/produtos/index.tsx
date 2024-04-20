import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';

const filterProducts = (products, selectedCategory) => {
  const filteredProducts = products.filter(
    (product) =>
      product.tags.includes(selectedCategory) ||
      selectedCategory === 'Todos os Produtos'
  );
  return filteredProducts;
};

function Produtos() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setselectedCategory] = useState('Todos os Produtos');
  const [categories, setCategories] = useState([]);

  //recuperando os produtos com API
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const productTags = data.flatMap((product) => product.tags);
        const uniqueTags = new Set(productTags);
        setCategories(Array.from(uniqueTags));
      });
  }, []);

  const handleCategoryClick = (category) => {
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
}

export default Produtos;
