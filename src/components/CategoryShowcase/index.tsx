import Link from 'next/link';
import React from 'react';
import { CategoryData } from '@/models/categoryData.interface';

interface CategoryBannerProps {
  data: CategoryData;
}

/**
 * Renders a category banner component with background image and text overlay.
 *
 * The component receives two arguments: `name` and `image`.
 * - `name`: A string representing the name of the category.
 * - `image`: A string representing the URL of the category banner image.
 */
const CategoryBanner: React.FC<CategoryBannerProps> = ({ data }) => {
  const { name, url } = data;
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="relative h-[660px] bg-cover bg-center"
    >
      <div className="absolute left-4 top-4">
        <p className="text-xl font-semibold text-primary">{name}</p>
        <Link href="/produtos" className="font-light text-primary underline">
          Conferir
        </Link>
      </div>
    </div>
  );
};

interface CategoryShowcaseProps {
  categories: CategoryData[];
}

/**
 * Renders a category showcase component which displays four category banners.
 *
 * The component is composed of four category banners which are displayed in a grid.
 * Each category banner has its name and a link to the respective category page.
 */
const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ categories }) => {
  return (
    <div className="container mx-auto my-4 grid grid-cols-3 gap-4 px-4">
      {categories.map((category, index) => (
        <div
          key={category.url}
          className={index === 0 || index === 3 ? 'col-span-2' : ''}
        >
          <CategoryBanner data={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryShowcase;
