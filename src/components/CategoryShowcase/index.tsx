import React from 'react';
import { CategoryData } from '@/models/categoryData.interface';
import CategoryBanner from '../CategoryBanner';

interface CategoryShowcaseProps {
  /**
   * An array of category data objects, containing category name and image URL.
   */
  categories: CategoryData[];
}

/**
 * Renders a showcase of categories in a grid layout.
 */
const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ categories }) => {
  return (
    <div className="container mx-auto mb-8 hidden grid-cols-1 gap-4 px-4 md:grid md:grid-cols-3">
      {categories.map((category, index) => (
        <div
          key={category.url}
          className={index === 0 || index === 3 ? 'md:col-span-2' : ''}
        >
          <CategoryBanner data={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryShowcase;
