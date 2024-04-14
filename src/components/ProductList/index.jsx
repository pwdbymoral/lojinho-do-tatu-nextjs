import React from 'react';
import ProductCard from '../ProductCard';

function ProductList({ products }) {
  return (
    <section className="mx-8 space-y-4 md:col-span-4 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 md:pl-4 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price.toFixed(2)}
        />
      ))}
    </section>
  );
}

export default ProductList;
