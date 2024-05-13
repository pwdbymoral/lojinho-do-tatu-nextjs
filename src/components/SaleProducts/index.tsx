import React from 'react';
import ProductCard from '../../components/ProductCard';
import type { Product } from '@/models/product.interface';

interface SaleProductsProps {
  /**
   * An array of product objects to be displayed.
   */
  products: Product[];
}

/**
 * A component that displays a list of products.
 *
 * In this project, it's used on homepage to display the current sale products.
 * However, it can be used for displaying any product list with appropriate
 * data.
 */
const SaleProducts: React.FC<SaleProductsProps> = ({ products }) => {
  return (
    <div className="container mx-auto my-4 space-y-2 px-4">
      <span className="text-xl font-semibold">Produtos com desconto</span>
      <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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

export default SaleProducts;
