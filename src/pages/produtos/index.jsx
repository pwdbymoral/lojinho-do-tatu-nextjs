import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BarraCategorias from '@/components/BarraCategorias';
import { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';

const filterProducts = (produtos, categoriaAtiva) => {
  const produtosFiltrados = produtos.filter(
    (produto) => produto.tags.includes(categoriaAtiva) || categoriaAtiva === 'Todos os Produtos'
  );
  return produtosFiltrados;
};

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos os Produtos');
  const [categorias, setCategorias] = useState([]);

  //recuperando os produtos com API
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        const productTags = data.flatMap((produto) => produto.tags);
        const uniqueTags = new Set(productTags);
        setCategorias(Array.from(uniqueTags));
      });
  }, []);

  const handleCategoryClick = (categoria) => {
    setCategoriaAtiva(categoria);
  };

  const produtosFiltrados = filterProducts(produtos, categoriaAtiva);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto flex min-h-[77vh] flex-col py-4 md:grid md:grid-cols-5 md:divide-x md:divide-gray-400">
        <BarraCategorias
          categorias={categorias}
          categoriaAtiva={categoriaAtiva}
          onCategoryClick={handleCategoryClick}
        />

        <ProductList products={produtosFiltrados} />
      </main>
      <Footer />
    </div>
  );
}

export default Produtos;
