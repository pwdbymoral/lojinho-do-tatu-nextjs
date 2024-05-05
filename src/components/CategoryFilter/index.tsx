import React from 'react';
import RammusFooter from '@/../assets/img/rammus footer.png';
import Image from 'next/image';
import { Category } from '@/models/category.interface';

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
    <section className="mx-8 flex max-w-md flex-col items-center p-4 md:mx-0 md:max-w-none lg:mr-4">
      <Image
        src={RammusFooter}
        alt="Rammus"
        width={200}
        className="hidden pb-2 pr-2 md:block"
      />
      <h2 className="mb-2 w-full rounded-md bg-primary px-2 py-4 text-lg font-bold text-gray-50">
        Categorias
      </h2>
      <div className="w-full space-y-2 overflow-auto">
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
