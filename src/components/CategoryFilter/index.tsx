import React from 'react';
import RammusIcon from '../../../public/icon_rammus.png';
import Image from 'next/image';
import type { Category } from '@/models/category.interface';

interface CategoryFilterProps {
  /** An array of categories */
  categories: Category[];
  /** The current selected category */
  selectedCategory: string;
  /**
   * A callback function that is called to update the selected category on the
   * parent component
   */
  onCategoryClick: (category: string) => void;
}

/**
 * A component that displays a categories list for filtering.
 *
 * In this project, it filters the Products Page. It receives an array of
 * categories retrieved from the product list, the current selected category and
 * the onCategoryClick function, which updates the category on the parent
 * component.
 */
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryClick,
}) => {
  return (
    <section className="flex w-full flex-col items-center divide-y-2 divide-primary px-8 lg:mx-0 lg:mr-4 lg:max-w-none">
      <Image
        src={RammusIcon}
        alt="Rammus"
        width={200}
        className="hidden lg:block"
      />
      <h2 className="w-full py-2 text-center text-xl font-bold text-primary">
        Categorias
      </h2>
      <div className="mb-2 w-full space-y-2 border-b border-primary pt-2 text-neutral-black">
        <div
          onClick={() => {
            onCategoryClick('Todos os Produtos');
          }}
        >
          <span
            className={
              selectedCategory === 'Todos os Produtos'
                ? 'cursor-pointer font-semibold'
                : 'cursor-pointer'
            }
          >
            Todos os Produtos
          </span>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              onCategoryClick(category.name);
            }}
          >
            <span
              className={
                selectedCategory === category.name
                  ? 'cursor-pointer font-semibold'
                  : 'cursor-pointer'
              }
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;
