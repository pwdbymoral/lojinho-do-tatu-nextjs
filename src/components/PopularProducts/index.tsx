import React from 'react';
import ProductCard from '../../components/ProductCard';
import type { Product } from '@/models/product.interface';

interface PopularProductsProps {
  /**
   * An array of product objects to be displayed.
   */
  products: Product[];
}

/**
 * A component that displays a list of products.
 *
 * In this project, it's used on homepage to display the most popular products.
 * However, it can be used for displaying any product list with appropriate
 * data.
 */
const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  return (
    <div className="container mx-auto my-4 space-y-2 px-4">
      <span className="text-xl font-semibold">Produtos em destaque</span>
      <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </div>
      <div className="flex justify-end">
        <a
          href=""
          className="pr-2 text-gray-500 lg:hover:text-neutral-black lg:hover:underline"
        >
          Veja mais &gt;
        </a>
      </div>
    </div>
  );
};

export default PopularProducts;
