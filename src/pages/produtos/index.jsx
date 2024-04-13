import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import BarraCategorias from '@/components/BarraCategorias';
import { useEffect, useState } from 'react';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div>
      <Navbar />
      <section className="container mx-auto grid min-h-[77vh] grid-cols-5 divide-x divide-gray-400 py-4">
        <BarraCategorias />

        <div className="col-span-4 grid grid-cols-3 gap-4 pl-4">
          {produtos.map((produto) => (
            <ProductCard
              image={produto.image}
              name={produto.name}
              price={produto.price.toFixed(2)}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Produtos;
