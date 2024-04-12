import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Banner from '@/components/Banner/Banner';
import ProdutosEmDestaque from '@/components/ProdutosEmDestaque/ProdutosEmDestaque';
import ProdutosComDesconto from '@/components/ProdutosComDesconto/ProdutosComDesconto';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  return (
    <main>
      <Navbar />
      <Banner />
      <ProdutosEmDestaque produtos={produtos} />
      <ProdutosComDesconto produtos={produtos} />

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
