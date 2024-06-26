import Image from 'next/image';
import type { Product } from '@/models/product.interface';
import React from 'react';

interface ProductCardProps {
  /** The product object containing details to be displayed. */
  product: Product;
}

/**
 * Renders a product card component.
 */
const ProductCard: React.FC<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  const { name, price, imageUrl, altText } = product;

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#" className="">
        <Image
          className="mx-auto rounded-t-lg p-8"
          src={imageUrl}
          alt={altText}
          width={200}
          height={200}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-neutral-black dark:text-neutral-white">
            {name}
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">
          <Rating stars={5} />
          <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-primary dark:bg-accent dark:text-primary">
            {5.0}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-neutral-black dark:text-neutral-white">
            R${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

const Rating: React.FC<{ stars: number }> = ({ stars }: { stars: number }) => {
  const ratingHtml = Array(stars).fill(
    <svg
      key={stars}
      className="h-4 w-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );

  return <>{ratingHtml}</>;
};

export default ProductCard;
